
'use client';

import * as React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarPlus, Pin, Clock, CalendarDays } from "lucide-react";
import type { CommunityCalendarEvent } from '@/types';
import { COMMUNITY_EVENTS_DATA } from '@/lib/constants';

// Helper function to format "YYYY-MM-DD" string to a readable date
const formatDisplayDate = (dateStr: string): string => {
  // Adding 'T00:00:00' ensures the date is parsed in the local timezone rather than UTC midnight
  const dateObj = new Date(`${dateStr}T00:00:00`);
  return dateObj.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function CommunityCalendarPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  // Sort events by date, earliest first
  const sortedEvents = [...COMMUNITY_EVENTS_DATA].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <CalendarPlus className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Community Calendar</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover upcoming community events. This calendar is updated monthly.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-1 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Select a Date</CardTitle>
            <CardDescription>Use the calendar to check specific dates.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center p-2 sm:p-4 md:p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              initialFocus
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-lg min-h-[300px]">
          <CardHeader>
            <CardTitle className="text-xl">
              All Upcoming Community Events
            </CardTitle>
            <CardDescription>
              Here's a list of all scheduled community gatherings, sorted by date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sortedEvents.length > 0 ? (
              <div className="space-y-6">
                {sortedEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-md bg-card hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{formatDisplayDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Pin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm mb-3">{event.description}</p>
                    {event.chatTopics && event.chatTopics.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-1">We’ll be chatting about:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                          {event.chatTopics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                Currently, no upcoming community events are listed. Please check back later as this calendar is updated monthly.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
