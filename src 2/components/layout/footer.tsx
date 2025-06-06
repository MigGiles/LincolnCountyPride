"use client";

import { useState, useEffect } from 'react';
import MailingListSignup from '@/components/mailing-list-signup';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t border-border text-card-foreground py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Stay Updated!</h3>
          <p className="text-muted-foreground mb-4">
            Sign up for our mailing list to get the latest news, event reminders, and special announcements from Lincoln County Pride.
          </p>
          <MailingListSignup />
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear !== null ? currentYear : '...'} Lincoln County Pride. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Made with <span className="text-red-500">❤️</span> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
