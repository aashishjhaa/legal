import React from 'react';

export const ScalesWatermark: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 800 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer Classical Shield Contour */}
      <path
        d="M400 45C335 92 255 110 170 112V280C170 400 265 495 400 565C535 495 630 400 630 280V112C545 110 465 92 400 45Z"
        stroke="#0A192F"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M400 68C342 108 270 124 192 126V276C192 384 278 470 400 535C522 470 608 384 608 276V126C530 124 458 108 400 68Z"
        stroke="#C5A059"
        strokeWidth="2"
        strokeDasharray="8 6"
      />

      {/* Central Pillar & Finial of the Scales of Justice */}
      <path
        d="M400 88L382 125L400 138L418 125L400 88Z"
        stroke="#0A192F"
        strokeWidth="3"
      />
      <line
        x1="400"
        y1="138"
        x2="400"
        y2="465"
        stroke="#0A192F"
        strokeWidth="5"
      />
      <circle
        cx="400"
        cy="170"
        r="22"
        stroke="#0A192F"
        strokeWidth="3.5"
      />
      <circle cx="400" cy="170" r="8" stroke="#C5A059" strokeWidth="3" />

      {/* Balance Beam */}
      <path
        d="M205 196C265 158 335 168 400 170C465 168 535 158 595 196"
        stroke="#0A192F"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="205" cy="196" r="10" stroke="#0A192F" strokeWidth="3" />
      <circle cx="595" cy="196" r="10" stroke="#0A192F" strokeWidth="3" />

      {/* Left Scale Suspension & Pan */}
      <line
        x1="205"
        y1="206"
        x2="145"
        y2="345"
        stroke="#0A192F"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <line
        x1="205"
        y1="206"
        x2="265"
        y2="345"
        stroke="#0A192F"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <line
        x1="205"
        y1="206"
        x2="205"
        y2="345"
        stroke="#0A192F"
        strokeWidth="1.5"
      />
      <ellipse
        cx="205"
        cy="345"
        rx="72"
        ry="12"
        stroke="#0A192F"
        strokeWidth="3"
      />
      <path
        d="M133 345C148 392 262 392 277 345"
        stroke="#0A192F"
        strokeWidth="3.5"
      />

      {/* Right Scale Suspension & Pan */}
      <line
        x1="595"
        y1="206"
        x2="535"
        y2="345"
        stroke="#0A192F"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <line
        x1="595"
        y1="206"
        x2="655"
        y2="345"
        stroke="#0A192F"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <line
        x1="595"
        y1="206"
        x2="595"
        y2="345"
        stroke="#0A192F"
        strokeWidth="1.5"
      />
      <ellipse
        cx="595"
        cy="345"
        rx="72"
        ry="12"
        stroke="#0A192F"
        strokeWidth="3"
      />
      <path
        d="M523 345C538 392 652 392 667 345"
        stroke="#0A192F"
        strokeWidth="3.5"
      />

      {/* Open Book of Law at the Base */}
      <path
        d="M140 520C230 495 320 505 400 555C480 505 570 495 660 520"
        stroke="#0A192F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M115 552C215 526 315 536 400 584C485 536 585 526 685 552"
        stroke="#0A192F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M95 585C205 560 310 568 400 612C490 568 595 560 705 585"
        stroke="#0A192F"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
