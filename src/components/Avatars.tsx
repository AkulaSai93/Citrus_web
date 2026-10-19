/** Simple flat-illustration avatars, drawn inline so nothing is fetched. */

type AvatarProps = { className?: string };

export function AvatarOne({ className = "" }: AvatarProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id="av1">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#av1)">
        <rect width="48" height="48" fill="#7c5cff" />
        {/* shoulders */}
        <path d="M4 48c0-10 9-15 20-15s20 5 20 15H4z" fill="#2f2a55" />
        {/* neck + head */}
        <rect x="20" y="24" width="8" height="9" rx="4" fill="#f0b48a" />
        <circle cx="24" cy="20" r="9" fill="#f7c49b" />
        {/* bob hair */}
        <path
          d="M13 21c0-7 5-11 11-11s11 4 11 11c0 2-1 4-1 4l-2-7c-4 2-12 2-16 0l-2 7s-1-2-1-4z"
          fill="#2b1b12"
        />
        <circle cx="21" cy="20" r="1.1" fill="#2b1b12" />
        <circle cx="27" cy="20" r="1.1" fill="#2b1b12" />
      </g>
    </svg>
  );
}

export function AvatarTwo({ className = "" }: AvatarProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id="av2">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#av2)">
        <rect width="48" height="48" fill="#ff6b9d" />
        <path d="M4 48c0-10 9-15 20-15s20 5 20 15H4z" fill="#3b2140" />
        <rect x="20" y="24" width="8" height="9" rx="4" fill="#c98a5e" />
        <circle cx="24" cy="20" r="9" fill="#d89a6c" />
        {/* curly hair */}
        <circle cx="16" cy="14" r="5" fill="#1d120c" />
        <circle cx="24" cy="11" r="5.5" fill="#1d120c" />
        <circle cx="32" cy="14" r="5" fill="#1d120c" />
        <circle cx="21" cy="20" r="1.1" fill="#1d120c" />
        <circle cx="27" cy="20" r="1.1" fill="#1d120c" />
      </g>
    </svg>
  );
}

export function AvatarThree({ className = "" }: AvatarProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id="av3">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#av3)">
        <rect width="48" height="48" fill="#f47b20" />
        <path d="M4 48c0-10 9-15 20-15s20 5 20 15H4z" fill="#1f3a4d" />
        <rect x="20" y="24" width="8" height="9" rx="4" fill="#8d5a3b" />
        <circle cx="24" cy="20" r="9" fill="#9c6742" />
        {/* short hair + beard */}
        <path d="M15 18c0-6 4-9 9-9s9 3 9 9c-3-3-15-3-18 0z" fill="#17100b" />
        <path
          d="M16 22c1 6 4 8 8 8s7-2 8-8c-2 4-14 4-16 0z"
          fill="#17100b"
          opacity="0.9"
        />
        <circle cx="21" cy="20" r="1.1" fill="#17100b" />
        <circle cx="27" cy="20" r="1.1" fill="#17100b" />
      </g>
    </svg>
  );
}
