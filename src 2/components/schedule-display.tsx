
import { SCHEDULE_DATA } from '@/lib/constants';
import type { FestivalEvent } from '@/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from 'lucide-react';

export default function ScheduleDisplay() {
  const eventsByDay = SCHEDULE_DATA.reduce((acc, event) => {
    // Expects time format like "Saturday July 26th, 11:00 AM - 12:00 PM"
    const commaIndex = event.time.indexOf(',');
    if (commaIndex === -1) {
      // Fallback for unexpected format, though data should be consistent
      const day = event.time.split(' ')[0] || "Unknown Day";
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(event);
      return acc;
    }

    const day = event.time.substring(0, commaIndex);
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(event);
    return acc;
  }, {} as Record<string, FestivalEvent[]>);

  return (
    <div className="space-y-8">
      {Object.entries(eventsByDay).map(([day, events]) => (
        <div key={day}>
          <h2 className="text-2xl font-semibold text-primary mb-4">{day}</h2>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableCaption className="py-4">Events for {day}. All times are local.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead className="w-[200px] text-right">Time</TableHead>
                  <TableHead className="w-[50px] text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => {
                  const commaIndex = event.time.indexOf(',');
                  const displayTime = commaIndex !== -1 ? event.time.substring(commaIndex + 2) : event.time; // Skips ", "
                  
                  return (
                    <TableRow key={event.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">
                        {event.name}
                        {event.description && <p className="text-xs text-muted-foreground mt-1">{event.description}</p>}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="inline-flex items-center gap-1 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {displayTime}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {/* Future: Add to calendar button or more info modal */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
      {SCHEDULE_DATA.length === 0 && <p className="text-muted-foreground text-center py-8">The schedule is being finalized. Check back soon!</p>}
    </div>
  );
}
