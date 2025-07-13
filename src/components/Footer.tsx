"use client";

export default function Footer() {
  return (
    <footer className="text-center text-base text-gray-700 py-8 mt-10 bg-white">
      <div className="font-serif font-semibold text-xl mb-1">090-4226-1163</div>
      <div className="italic text-base text-gray-600 mb-1">Hour 11:00 - 20:00</div>
      <div className="text-xs text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} STAND. All rights reserved.
      </div>
    </footer>
  );
}
