import { PERFORMERS_DATA } from '@/lib/constants';
import PerformerCard from './performer-card';

export default function PerformerSpotlights() {
  if (PERFORMERS_DATA.length === 0) {
    return <p className="text-muted-foreground text-center py-8">Our performers list is being updated. Stay tuned for an amazing lineup!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {PERFORMERS_DATA.map((performer) => (
        <PerformerCard key={performer.id} performer={performer} />
      ))}
    </div>
  );
}
