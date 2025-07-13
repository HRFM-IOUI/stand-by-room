// src/components/SocialLinks.tsx
"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
// 今後、他SNSを増やすならここでimportするだけでOK！

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 my-3">
      {/* Instagram */}
      <div className="flex items-center gap-2">
        <Image
          src="/stand-instagram-qr.jpg" // public配下に画像
          alt="Instagram QR"
          width={48}
          height={48}
          className="rounded shadow"
        />
        <a
          href="https://www.instagram.com/stand_hair"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold text-base hover:text-rose-400"
        >
          <FaInstagram className="text-lg" />
          <span>@stand_hair</span>
        </a>
      </div>
      {/* ここに今後、XやTikTokなど追加可能 */}
    </div>
  );
}
