"use client";

export default function Footer() {
  return (
    <footer
      className="text-center py-8 pb-24 md:pb-20 mt-10 bg-white"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="text-2xl md:text-3xl font-semibold tracking-widest text-gray-800 mb-2">
        090-4226-1163
      </div>
      <div className="text-base text-gray-600 mb-1">
        Hour 11:00 - 20:00
      </div>
      <div className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} STAND. All Rights Reserved.
      </div>
    </footer>
  );
}
