
"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import RainbowIcon from './RainbowIcon'; // Updated import
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Pride Schedule' },
  { href: '/performers', label: 'Performers' },
  { href: '/resources', label: 'Resources' },
  { href: '/pronouns', label: 'Pronouns' },
  { href: '/community-calendar', label: 'Community Calendar' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <RainbowIcon className="h-8 w-8" /> {/* Updated component */}
          <span className="text-2xl font-bold">Lincoln County Pride</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm lg:text-base text-foreground/80 hover:text-primary hover:bg-primary/10 transition px-3 py-2 lg:px-4",
                pathname === item.href && "text-primary font-semibold bg-primary/10"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <RainbowIcon className="h-7 w-7" /> {/* Updated component */}
                    <span className="text-xl font-bold">Lincoln County Pride</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-lg py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 transition",
                        pathname === item.href && "text-primary font-semibold bg-primary/10"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
