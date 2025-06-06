import Image from 'next/image';
import type { Performer } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Palette, Film } from 'lucide-react'; // Example icons

interface PerformerCardProps {
  performer: Performer;
}

// Helper to choose an icon based on performer type
const PerformerIcon = ({ type }: { type: string }) => {
  switch (type.toLowerCase()) {
    case 'drag queen':
      return <Palette className="h-4 w-4 text-primary" />;
    case 'musicians':
    case 'dj':
      return <Mic className="h-4 w-4 text-primary" />;
    case 'speaker':
      return <Film className="h-4 w-4 text-primary" />; // Using Film as a stand-in for speaker/talk
    default:
      return <Users className="h-4 w-4 text-primary" />; // Users icon as a generic fallback
  }
};
// Dummy Users icon if not imported
const Users = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;


export default function PerformerCard({ performer }: PerformerCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[3/4] relative w-full overflow-hidden">
          <Image
            src={performer.photoUrl}
            alt={`Photo of ${performer.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={performer.dataAiHint || "performer portrait"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl mb-1">{performer.name}</CardTitle>
        <Badge variant="outline" className="mb-3 border-primary text-primary flex items-center gap-1 w-fit">
          <PerformerIcon type={performer.type} />
          {performer.type}
        </Badge>
        <CardDescription className="text-sm text-foreground/80 line-clamp-4">
          {performer.bio}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {/* Could add social media links or a "Read More" button here if needed */}
      </CardFooter>
    </Card>
  );
}
