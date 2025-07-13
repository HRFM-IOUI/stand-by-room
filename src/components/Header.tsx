"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// STANDロゴアニメーション（ダミー: 差し替えOK）
function StandLogoAnimated() {
  return (
    <svg width={72} height={28} viewBox="0 0 160 60" fill="none">
      <g>
        <rect x="5" y="5" width="14" height="50" rx="6" fill="#19181A" />
        <rect x="25" y="5" width="14" height="50" rx="6" fill="#E16B95" />
        <rect x="45" y="5" width="14" height="50" rx="6" fill="#19181A" />
        <rect x="65" y="5" width="14" height="50" rx="6" fill="#E16B95" />
        <rect x="85" y="5" width="14" height="50" rx="6" fill="#19181A" />
      </g>
    </svg>
  );
}

// 粒子アニメーション
function ModalParticleBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.3 + Math.random() * 2.7,
      d: 0.34 + Math.random() * 1.12,
    }));

    let raf: number;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(234,120,146,0.11)";
        ctx.shadowColor = "rgba(234,120,146,0.09)";
        ctx.shadowBlur = 6;
        ctx.fill();
        p.y += p.d;
        if (p.y > canvas.height + p.r) {
          p.y = -p.r;
          p.x = Math.random() * canvas.width;
        }
      }
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={440}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none rounded-3xl"
      style={{ opacity: 0.44 }}
    />
  );
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Staff", href: "/staff" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // モーダル外クリックで閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center relative">
        <nav className="hidden md:flex flex-1 justify-end space-x-16">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-0.5 transition-colors ${
                  isActive
                    ? "text-rose-400 font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden text-2xl absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          ☰
        </button>
      </div>

      {/* ブランドモーダル */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/35 backdrop-blur-sm flex items-start justify-center"
          onClick={handleBackdropClick}
        >
          <div
            className={`
              relative mt-24 w-[90vw] max-w-sm shadow-2xl rounded-3xl p-8
              flex flex-col items-center space-y-5
              border border-white/15 ring-1 ring-rose-100/40 overflow-hidden
              backdrop-blur-[12px] bg-white/60 animate-modalpop
            `}
            style={{
              background: "linear-gradient(120deg,rgba(255,255,255,0.86) 70%,rgba(234,120,146,0.10) 100%)"
            }}
          >
            <ModalParticleBG />
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(100deg,rgba(255,255,255,0.12) 0%,rgba(234,120,146,0.09) 100%)",
                animation: "moveMist 16s linear infinite"
              }}
            />
            <div
              className="absolute left-0 top-0 h-full w-2/5 pointer-events-none opacity-25"
              style={{
                background:
                  "linear-gradient(90deg,rgba(255,255,255,0.09) 25%,rgba(234,120,146,0.14) 70%,transparent 100%)",
                filter: "blur(11px)"
              }}
            />

            {/* 本体UI */}
            <div className="mb-2 opacity-80 w-20 animate-fadein">
              <StandLogoAnimated />
            </div>
            <div
              className="text-xs text-gray-500 mb-4 tracking-wide animate-fadein"
              style={{ animationDelay: "0.14s" }}
            >
              STAND MENU
            </div>
            <div className="flex flex-col items-center w-full space-y-2 mt-2">
              {navItems.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`navitem-glassblock w-full text-lg font-medium py-2 px-4 text-center rounded transition 
                      ${isActive ? "text-rose-400 font-bold" : "text-gray-700"}
                      animate-fadein`}
                    style={{ animationDelay: `${0.18 + idx * 0.06}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <button
              className="absolute right-3 top-3 bg-white/70 rounded-full shadow hover:bg-rose-100 w-9 h-9 flex items-center justify-center text-2xl animate-fadein"
              style={{ animationDelay: "0.36s" }}
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ▼ グローバルCSS（Hover, モーダルPOP, Mist） */}
      <style jsx global>{`
        .animate-fadein {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeinPop .8s cubic-bezier(.41,1,.43,1.03) forwards;
        }
        @keyframes fadeinPop {
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes moveMist {
          0% { transform: translateX(-24px);}
          100% { transform: translateX(24px);}
        }
        .animate-modalpop {
          animation: modalPop .34s cubic-bezier(.41,1.3,.43,1.09);
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.95) translateY(22px);}
          90% { opacity: 1; transform: scale(1.04) translateY(-8px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        .navitem-glassblock {
          position: relative;
          transition:
            color .24s cubic-bezier(.36,1.4,.53,1.01),
            background .20s cubic-bezier(.36,1.4,.53,1.01),
            transform .34s cubic-bezier(.41,1.3,.43,1.09);
          cursor: pointer;
        }
        .navitem-glassblock:hover,
        .navitem-glassblock:active {
          background: rgba(234,120,146,0.13);
          color: #E16B95;
          transform: scale(1.06);
        }
        .navitem-glassblock:active {
          background: rgba(234,120,146,0.20);
          color: #d24d80;
          transform: scale(0.97);
        }
      `}</style>
    </header>
  );
}
