"use client";

import Link from "next/link";

export default function ReserveButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="/reserve">
        <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:opacity-80 transition">
          RESERVE
        </button>
      </Link>
    </div>
  );
}
