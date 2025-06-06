import { Button } from "@/components/ui/button";
import { PERFORMERS_DATA } from "@/lib/constants";
import { ArrowRight, CalendarDays, Users } from "lucide-react";
import Link from "next/link";
import PerformerCard from "@/components/performer-card";

export default function Home() {
  const featuredPerformers = PERFORMERS_DATA.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 rounded-xl bg-gradient-to-br from-primary/10 via-background to-background shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Welcome to <span className="text-primary">Lincoln County Pride</span>!
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
            At Lincoln County Pride, our mission for Pride is to create a welcoming and inclusive space where everyone—young and old—feels 
            seen, valued, and safe. We strive to bring the community together, fostering a sense of belonging where people can live openly 
            and authentically. Through love, kindness, and visibility, we celebrate the beauty of diversity and stand against the forces 
            of division. In a world that can often feel chaotic and unkind, we aim to be a beacon of support, joy, and unity for all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              <Link href="/schedule">
                <CalendarDays className="mr-2 h-5 w-5" /> View Full Schedule
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Performers Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Performers</h2>
          <Button variant="link" asChild className="text-primary hover:text-primary/80">
            <Link href="/performers">
              See All Performers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPerformers.map((performer) => (
            <PerformerCard key={performer.id} performer={performer} />
          ))}
        </div>
      </section>
    </div>
  );
}
