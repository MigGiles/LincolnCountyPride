
export interface FestivalEvent {
  id: string;
  name: string;
  time: string;
  location: string;
  description?: string;
}

export interface Performer {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  type: string;
  dataAiHint?: string;
}

export interface CommunityCalendarEvent {
  id: string;
  date: string; // Expected format "YYYY-MM-DD"
  title: string;
  time: string;
  location: string;
  description: string;
  chatTopics?: string[];
}
