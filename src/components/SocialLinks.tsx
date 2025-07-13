// src/components/SocialLinks.tsx
"use client";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2 my-3">
      <a
        href="https://www.instagram.com/stand_hair"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-semibold text-base hover:text-rose-400 transition"
        aria-label="Instagram @stand_hair"
      >
        <FaInstagram className="text-2xl" />
        <span>@stand_hair</span>
      </a>
    </div>
  );
}
