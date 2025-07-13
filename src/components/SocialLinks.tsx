"use client";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://www.instagram.com/stand_hair"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center gap-1 font-semibold text-base hover:text-rose-400"
      >
        <FaInstagram className="text-2xl" />
        <span>@stand_hair</span>
      </a>
    </div>
  );
}
