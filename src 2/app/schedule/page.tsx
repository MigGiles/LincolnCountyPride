import ScheduleDisplay from '@/components/schedule-display';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <CalendarClock className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Pride Schedule</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Plan your unforgettable Lincoln County Pride experience! 
        Here’s the full rundown of events and times — all taking place at the Memorial Center.
        </p>
      </header>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Event Lineup</CardTitle>
          <CardDescription>Browse through all the amazing events we have planned for you.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScheduleDisplay />
        </CardContent>
      </Card>
    </div>
  );
}
