
'use client';

import React from 'react';

const RainbowIcon = ({ className }: { className?: string }) => {
  // Ensure unique ID for gradient if multiple icons are on the page
  const uniqueIdSuffix = React.useId ? React.useId().replace(/:/g, '') : Math.random().toString(36).substring(2, 11);
  const gradientId = `rainbowGradient-${uniqueIdSuffix}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />   {/* red */}
          <stop offset="20%" stopColor="#f97316" />  {/* orange */}
          <stop offset="40%" stopColor="#eab308" />  {/* yellow */}
          <stop offset="60%" stopColor="#22c55e" />  {/* green */}
          <stop offset="80%" stopColor="#3b82f6" />  {/* blue */}
          <stop offset="100%" stopColor="#7c3aed" /> {/* indigo/violet */}
        </linearGradient>
      </defs>
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </svg>
  );
};

export default RainbowIcon;
