import { motion } from "motion/react";

/**
 * Lone Star seal: a rotating ring of text around a red disc with the
 * $500 OFF offer and a white star — like a Texas badge / medallion.
 */
export default function StarSeal({ className = "" }: { className?: string }) {
  const text = "FREE INSPECTION ★ FINANCING AVAILABLE ★ FEATURING GONANO ★ ";
  return (
    <div className={`relative aspect-square ${className}`}>
      <motion.svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        <defs>
          <path id="seal-ring" d="M150,150 m-122,0 a122,122 0 1,1 244,0 a122,122 0 1,1 -244,0" />
        </defs>
        <circle cx="150" cy="150" r="146" fill="#0b1c2f" stroke="#ffffff" strokeOpacity=".35" strokeWidth="2" />
        <text fill="#ffffff" fontSize="15.5" fontWeight="700" fontFamily="DM Sans" textLength="752" lengthAdjust="spacing">
          <textPath href="#seal-ring">{text}</textPath>
        </text>
      </motion.svg>
      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
        <circle cx="150" cy="150" r="104" fill="#b31b23" />
        <circle cx="150" cy="150" r="96" fill="none" stroke="#ffffff" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="3 5" />
        <path transform="translate(150 86) scale(1.15)" d="M0 -16 l4.7 9.6 10.6 1.5 -7.7 7.5 1.8 10.5 -9.4 -5 -9.4 5 1.8 -10.5 -7.7 -7.5 10.6 -1.5z" fill="#ffffff" />
        <text x="150" y="168" textAnchor="middle" fill="#ffffff" fontSize="66" fontWeight="900" fontFamily="'Big Shoulders Display', sans-serif">
          $500
        </text>
        <text x="150" y="200" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800" letterSpacing="6" fontFamily="'Big Shoulders Display', sans-serif">
          OFF
        </text>
        <text x="150" y="222" textAnchor="middle" fill="#ffffff" fillOpacity=".85" fontSize="10.5" fontWeight="700" letterSpacing="2.5" fontFamily="DM Sans">
          ROOF REJUVENATION
        </text>
      </svg>
    </div>
  );
}
