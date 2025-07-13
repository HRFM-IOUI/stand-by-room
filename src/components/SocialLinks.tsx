"use client";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-2 mt-0 mb-0">
      <a
        href="https://www.instagram.com/stand_hair"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center gap-1 text-lg hover:text-rose-400 transition"
      >
        <FaInstagram className="text-2xl md:text-2xl" />
        <span className="font-semibold text-base">@stand_hair</span>
      </a>
    </div>
  );
}
