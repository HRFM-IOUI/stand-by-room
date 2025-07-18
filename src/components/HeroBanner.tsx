"use client";
import React, { useRef, useEffect, useState } from "react";

const images = [
  "/herobanner1.jpeg",
  "/herobanner2.jpeg"
];

const DISPLAY_TIME = 4500;
const DISSOLVE_TIME = 2200;

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [showImg, setShowImg] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgsRef = useRef<(HTMLImageElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

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
    setProgress(0);

    function animate(now: number) {
      if (!start) start = now;
      let t = (now - start) / DISSOLVE_TIME;
      if (t > 1) t = 1;
      setProgress(t);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img1 = imgsRef.current[current];
      const img2 = imgsRef.current[next!];
      const [w, h] = getCanvasSize();
      if (canvas && ctx && img1 && img2) {
        canvas.width = w;
        canvas.height = h;
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
        setProgress(1);
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

  function getCanvasSize() {
    if (typeof window === "undefined") return [1440, 340];
    if (window.innerWidth < 640) return [window.innerWidth * 0.91, window.innerWidth * 0.42];
    return [1440, 340];
  }

  // Canvas初期化
  useEffect(() => {
    if (next !== null || showImg) return;
    const [w, h] = getCanvasSize();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imgsRef.current[current];
    if (canvas && ctx && img) {
      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.drawImage(img, 0, 0, w, h);
    }
  }, [current, next, showImg]);

  // リサイズ時の再描画
  useEffect(() => {
    function handleResize() {
      if (next !== null || showImg) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const [w, h] = getCanvasSize();
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      const img = imgsRef.current[current];
      if (ctx && img) {
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
      {/* ロゴ：Heroバナーの上に中央配置でmarginTopなし */}
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

      {/* バナー本体。スマホで左右余白あり・中央寄せ */}
      <div className="relative w-full px-4 sm:px-0 flex justify-center">
        <div className="w-full max-w-3xl aspect-[16/7.2] md:aspect-[16/6.3] rounded-xl overflow-hidden shadow-lg border border-gray-100/50 bg-white/60">
          {showImg ? (
            <img
              src={images[current]}
              alt="hero"
              className="w-full h-full object-cover rounded-xl"
              draggable={false}
              style={{ aspectRatio: "16/7.2", objectFit: "cover" }}
            />
          ) : (
            <canvas
              ref={canvasRef}
              width={getCanvasSize()[0]}
              height={getCanvasSize()[1]}
              className="w-full h-full rounded-xl"
              style={{
                display: "block",
                objectFit: "cover",
                aspectRatio: "16/7.2",
                background: "#f5f6f7"
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
