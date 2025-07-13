"use client";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-gray-500 py-10 mt-24 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-1">
        <span className="text-base md:text-lg font-serif text-gray-700">
          <a href="tel:090-4226-1163" className="hover:text-rose-400 transition">090-4226-1163</a>
        </span>
        <span className="italic text-base text-gray-600">Hour 11:00 - 20:00</span>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} STAND. All rights reserved.
      </div>
    </footer>
  );
}
