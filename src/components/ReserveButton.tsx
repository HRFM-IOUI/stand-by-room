// ReserveButton.tsx
"use client";

export default function ReserveButton() {
  return (
    <>
      {/* グラデーション背景をフッターエリアに敷く */}
      <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-40"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(40,40,40,0.10) 70%, rgba(0,0,0,0.16) 100%)",
          // お好みでカラーや濃度を調整
        }}
      />
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 pointer-events-none">
        <a
          href="https://lin.ee/xxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto px-8 py-3 rounded-full font-semibold tracking-wide text-white text-sm shadow-xl transition-transform duration-200 hover:scale-105"
          style={{
            background: "rgba(0, 0, 0, 0.51)",
            fontFamily: "Helvetica, Arial, sans-serif",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
          }}
        >
          RESERVE
        </a>
      </div>
    </>
  );
}
