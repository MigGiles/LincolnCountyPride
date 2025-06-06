import PerformerSpotlights from '@/components/performer-spotlights';
import { Users } from 'lucide-react';

export default function PerformersPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <Users className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Performer Spotlights</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the incredible artists, speakers, and special guests who will be lighting up Lincoln County Pride!
        </p>
      </header>
      <PerformerSpotlights />
    </div>
  );
}
