// src/components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="w-full text-center text-xs text-gray-500 py-10 mt-24 border-t border-gray-100">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6">
        {/* 左：住所＆Google Map */}
        <div className="mb-4 md:mb-0 text-left">
          <a
            href="https://www.google.com/maps/search/?api=1&query=4-4-21+NISHIOGI,+SUGINAMI,+Tokyo,+Japan"
            target="_blank"
            rel="noopener noreferrer"
            className="italic underline text-base text-gray-800 hover:text-rose-400"
          >
            4-4-21 NISHIOGI, SUGINAMI, Tokyo, Japan
          </a>
        </div>
        {/* 中央：電話・営業時間 */}
        <div>
          <div className="italic text-base text-gray-600">Hour 11:00 - 20:00</div>
          <a
            href="tel:090-4226-1163"
            className="text-xl md:text-2xl font-serif font-semibold tracking-widest text-gray-800 hover:text-rose-400 transition block"
          >
            090-4226-1163
          </a>
        </div>
        {/* 右：著作権 */}
        <div className="text-xs text-gray-400 mt-2 md:mt-0 text-right">
          &copy; {new Date().getFullYear()} STAND. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
