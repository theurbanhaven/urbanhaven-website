export default function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 transition-all duration-300"
      fill="none"
    >
      <defs>
        <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="60%" stopColor="#D62976" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>

      {/* Camera body */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        className="fill-transparent group-hover:fill-[url(#instaGradient)] transition-all"
      />

      {/* OUTER BORDER (FIXED) */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="#9CA3AF" // gray-400 (initial)
        strokeWidth="2"
        className="group-hover:stroke-white transition-all"
      />

      {/* Lens */}
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="#9CA3AF" // gray initially
        strokeWidth="2"
        className="group-hover:stroke-white transition-all"
      />

      {/* Small dot */}
      <circle
        cx="16.5"
        cy="7.5"
        r="1.2"
        fill="#9CA3AF"
        className="group-hover:fill-white transition-all"
      />
    </svg>
  );
}
