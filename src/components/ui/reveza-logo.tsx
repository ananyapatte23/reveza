import React from "react";

interface RevezaLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export default function RevezaLogo({ className = "", size = 48, showText = false }: RevezaLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm select-none"
      >
        <defs>
          {/* Top Sky Blue Gradient */}
          <linearGradient id="revezaSkyGrad" x1="50%" y1="15%" x2="50%" y2="55%">
            <stop offset="0%" stopColor="#367ebe" />
            <stop offset="100%" stopColor="#2a75b3" />
          </linearGradient>

          {/* Bottom Navy Blue Gradient */}
          <linearGradient id="revezaDeepGrad" x1="50%" y1="45%" x2="50%" y2="95%">
            <stop offset="0%" stopColor="#1f4287" />
            <stop offset="100%" stopColor="#18316c" />
          </linearGradient>

          {/* Droplet Definition for Clipping */}
          <clipPath id="revezaDropletClip">
            <path
              d="M50 92.5 C 43.5 85, 23 63.5, 23 44 C 23 28.5, 35 16, 50 16 C 65 16, 77 28.5, 77 44 C 77 63.5, 56.5 85, 50 92.5 Z"
              fill="black"
            />
          </clipPath>
        </defs>

        {/* Group clipped to the elegant water-droplet/pin boundary */}
        <g clipPath="url(#revezaDropletClip)">
          {/* 1. Base / Top Dome Portion (Sky Blue) */}
          <rect x="0" y="0" width="100" height="100" fill="url(#revezaSkyGrad)" />

          {/* 2. Left and Right Deep Navy Wings */}
          {/* Left Wing */}
          <path
            d="M 23 44 C 23 44, 45 44, 49.5 58 L 49.5 95 L 23 65 Z"
            fill="url(#revezaDeepGrad)"
          />
          {/* Right Wing */}
          <path
            d="M 77 44 C 77 44, 55 44, 50.5 58 L 50.5 95 L 77 65 Z"
            fill="url(#revezaDeepGrad)"
          />

          {/* 3. The Elegant Central White Ribbon/Wing Splitter */}
          {/* It creates a thick white curved wave dividing the sky and deep navy sections */}
          <path
            d="M 50 92.5 L 50.2 92.5 C 50.5 84, 50 58.5, 50 58.5 C 50 58.5, 53.5 45.8, 77 44.2 C 77 44.2, 70 41, 50 55 C 30 41, 23 44.2, 23 44.2 C 46.5 45.8, 50 58.5, 50 58.5 Z"
            fill="#FFFFFF"
          />

          {/* Small clean vertical highlight split at the bottom tip for perfection */}
          <rect x="49.3" y="58" width="1.4" height="35" fill="#FFFFFF" />
        </g>
      </svg>

      {showText && (
        <span className="font-serif font-black text-2xl tracking-[-0.02em] text-text-primary leading-none">
          Reveza
        </span>
      )}
    </div>
  );
}
