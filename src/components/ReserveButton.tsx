"use client";

import Link from "next/link";

export default function ReserveButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <a
        href="https://lin.ee/xxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto px-8 py-3 rounded-full shadow-lg transition font-semibold tracking-wider text-white text-base"
        style={{
          background: "rgba(141, 163, 153, 0.86)", // ブランドカラー＋クリア
          fontFamily: "Helvetica, Arial, sans-serif",
          boxShadow: "0 2px 10px rgba(141,163,153,0.18)",
          backdropFilter: "blur(2.5px)",
        }}
      >
        RESERVE
      </a>
    </div>
  );
}
