"use client";

export default function Footer() {
  return (
    <footer
      className="text-center pt-7 pb-16 md:pb-12 bg-white"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        letterSpacing: "0.02em",
      }}
    >
      <div className="flex flex-col items-center space-y-2 md:space-y-2.5">
        <div className="text-lg md:text-xl font-medium tracking-wide text-gray-800 leading-tight">
          090-4226-1163
        </div>
        <div className="text-xs md:text-sm text-gray-600 leading-tight">
          Hour 11:00 - 20:00
        </div>
        <div className="text-[11px] md:text-xs text-gray-500 leading-tight mt-1.5">
          &copy; {new Date().getFullYear()} STAND. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
