"use client";
import React, { useRef, useEffect, useState } from "react";

const images = [
  "/herobanner1.jpeg",
  "/herobanner2.jpeg"
];

const DISPLAY_TIME = 4500;
const DISSOLVE_TIME = 2200;
const ASPECT_RATIO_W = 16;
const ASPECT_RATIO_H = 8.5;

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [allLoaded, setAllLoaded] = useState(false);
  const [showImg, setShowImg] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgsRef = useRef<(HTMLImageElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  // ★ スマホ判定
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const borderRadius = isMobile ? "0" : "0.75rem";

  // 画像プリロード
  useEffect(() => {
    let loaded = 0;
    imgsRef.current = images.map((img) => {
      const el = new window.Image();
      el.src = img;
      el.onload = () => {
        loaded += 1;
        if (loaded === images.length) setAllLoaded(true);
      };
      el.onerror = () => setAllLoaded(true);
      return el;
    });
  }, []);

  useEffect(() => {
    if (allLoaded) setTimeout(() => setShowImg(false), 100);
  }, [allLoaded]);

  // クロスディゾルブアニメ
  useEffect(() => {
    if (next === null || showImg) return;
    let start: number | null = null;

    function animate(now: number) {
      if (!start) start = now;
      let t = (now - start) / DISSOLVE_TIME;
      if (t > 1) t = 1;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img1 = imgsRef.current[current];
      const img2 = imgsRef.current[next!];
      const [w, h] = getCanvasSize();
      const dpr = window.devicePixelRatio || 1;
      if (canvas && ctx && img1 && img2) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        ctx.globalAlpha = 1 - t;
        ctx.drawImage(img1, 0, 0, w, h);
        ctx.globalAlpha = t;
        ctx.drawImage(img2, 0, 0, w, h);
        ctx.globalAlpha = 1;
      }
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCurrent(next!);
        setNext(null);
      }
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [next, current, showImg]);

  // 自動切り替え
  useEffect(() => {
    if (next !== null || showImg) return;
    timeoutRef.current = setTimeout(() => {
      setNext((current + 1) % images.length);
    }, DISPLAY_TIME);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, next, showImg]);

  // 画面幅ピッタリ＋比率固定で高さ算出
  function getCanvasSize() {
    if (typeof window === "undefined") return [1440, 340];
    if (window.innerWidth < 640) {
      const width = window.innerWidth;
      const height = width * ASPECT_RATIO_H / ASPECT_RATIO_W;
      return [width, height];
    }
    const width = 900;
    const height = width * ASPECT_RATIO_H / ASPECT_RATIO_W;
    return [width, height];
  }

  // Canvas初期化
  useEffect(() => {
    if (next !== null || showImg) return;
    const [w, h] = getCanvasSize();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imgsRef.current[current];
    const dpr = window.devicePixelRatio || 1;
    if (canvas && ctx && img) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.drawImage(img, 0, 0, w, h);
    }
  }, [current, next, showImg]);

  // リサイズ時の再描画
  useEffect(() => {
    function handleResize() {
      if (next !== null || showImg) return;
      const [w, h] = getCanvasSize();
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imgsRef.current[current];
      const dpr = window.devicePixelRatio || 1;
      if (canvas && ctx && img) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, w, h);
        ctx.globalAlpha = 1;
        ctx.drawImage(img, 0, 0, w, h);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [current, next, showImg]);

  // ======== JSX ========
  return (
    <section className="w-full flex flex-col items-center pt-0 pb-2">
      {/* ロゴ */}
      <div
        className="z-20"
        style={{
          width: "18%",
          maxWidth: "120px",
          minWidth: "60px",
          aspectRatio: "2/1",
          marginTop: "0",
          marginBottom: "3.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        <img
          src="/stand.png"
          alt="STANDロゴ"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 20px rgba(140,170,150,0.09))"
          }}
          draggable={false}
        />
      </div>

      {/* 横幅いっぱい・高さ自動（アスペクト維持） */}
      <div className="relative w-full flex justify-center">
        <div
          className="overflow-hidden shadow-lg border border-gray-100/50 bg-white/60"
          style={{
            width: "100vw",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            borderRadius, // スマホのみ角丸ナシ
            aspectRatio: `${ASPECT_RATIO_W} / ${ASPECT_RATIO_H}`,
          }}
        >
          {showImg ? (
            <img
              src={images[current]}
              alt="hero"
              draggable={false}
              style={{
                width: "100vw",
                maxWidth: "900px",
                height: "auto",
                aspectRatio: `${ASPECT_RATIO_W} / ${ASPECT_RATIO_H}`,
                display: "block",
                objectFit: "cover",
                borderRadius, // スマホのみ角丸ナシ
              }}
            />
          ) : (
            <canvas
              ref={canvasRef}
              style={{
                display: "block",
                width: "100vw",
                maxWidth: "900px",
                height: "auto",
                aspectRatio: `${ASPECT_RATIO_W} / ${ASPECT_RATIO_H}`,
                background: "#f5f6f7",
                objectFit: "cover",
                borderRadius, // スマホのみ角丸ナシ
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
