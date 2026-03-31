"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 750;
const FRAME_PATH = "/frames/Main_00";

function getFrameSrc(index: number): string {
  const num = String(index).padStart(3, "0");
  return `${FRAME_PATH}${num}.jpg`;
}

/* ── Text Overlay Section ─────────────────────── */

interface TextSection {
  id: string;
  startProgress: number;
  endProgress: number;
  peakStart: number;
  peakEnd: number;
  align: "center" | "left" | "right";
  headline: string;
  subline: string;
  tag?: string;
}

const TEXT_SECTIONS: TextSection[] = [
  {
    id: "hero",
    startProgress: 0.0,
    endProgress: 0.08,
    peakStart: 0.0,
    peakEnd: 0.04,
    align: "center",
    headline: "WHERE DIMENSIONS\nCOME ALIVE",
    subline: "Cinematic 3D design & motion graphics\nthat redefine digital storytelling.",
    tag: "ELYSIUM STUDIO",
  },
  {
    id: "feature-1",
    startProgress: 0.06,
    endProgress: 0.16,
    peakStart: 0.09,
    peakEnd: 0.13,
    align: "left",
    headline: "CINEMATIC\n3D DESIGN",
    subline: "Every frame crafted with obsessive precision.\nFrom concept to final render, we sculpt\nlight, shadow, and form into art.",
    tag: "01 — DESIGN",
  },
  {
    id: "feature-2",
    startProgress: 0.14,
    endProgress: 0.24,
    peakStart: 0.17,
    peakEnd: 0.21,
    align: "right",
    headline: "SCULPTED\nWITH LIGHT",
    subline: "We bend photons to our will.\nVolumetric atmospheres and physically\naccurate lighting models.",
    tag: "02 — ILLUMINATION",
  },
  {
    id: "feature-3",
    startProgress: 0.22,
    endProgress: 0.32,
    peakStart: 0.25,
    peakEnd: 0.29,
    align: "left",
    headline: "MOTION\nTHAT MOVES",
    subline: "Fluid animations that breathe life into\nstatic geometry. Every keyframe tells\na story. Every transition, an emotion.",
    tag: "03 — MOTION",
  },
  {
    id: "feature-4",
    startProgress: 0.30,
    endProgress: 0.40,
    peakStart: 0.33,
    peakEnd: 0.37,
    align: "right",
    headline: "PHYSICALLY\nACCURATE",
    subline: "Material science meets digital art.\nMicro-surface details that react\nperfectly to every digital environment.",
    tag: "04 — MATERIALS",
  },
  {
    id: "feature-5",
    startProgress: 0.45,
    endProgress: 0.55,
    peakStart: 0.48,
    peakEnd: 0.52,
    align: "left",
    headline: "EVERY PIXEL,\nINTENTIONAL",
    subline: "We don't just render — we compose.\nEvery element placed with absolute purpose.",
    tag: "05 — DETAIL",
  },
  {
    id: "feature-6",
    startProgress: 0.60,
    endProgress: 0.70,
    peakStart: 0.63,
    peakEnd: 0.67,
    align: "right",
    headline: "ENVIRONMENTAL\nSTORYTELLING",
    subline: "Building cohesive worlds.\nFrom macro structures to micro textures,\nevery dimension built to immerse.",
    tag: "06 — WORLDBUILDING",
  },
  {
    id: "feature-7",
    startProgress: 0.75,
    endProgress: 0.85,
    peakStart: 0.78,
    peakEnd: 0.82,
    align: "left",
    headline: "REAL-TIME\nRENDERING",
    subline: "Pushing the boundaries of what's possible.\nUnreal Engine. Blender. Cinema 4D.\nYour vision, rendered in real-time.",
    tag: "07 — TECHNOLOGY",
  },
  {
    id: "feature-8",
    startProgress: 0.85,
    endProgress: 0.95,
    peakStart: 0.88,
    peakEnd: 0.92,
    align: "right",
    headline: "THE FUTURE\nOF DIGITAL",
    subline: "Preparing brands for the next iteration\nof interactive spatial computing.",
    tag: "08 — EVOLUTION",
  },
  {
    id: "cta",
    startProgress: 0.93,
    endProgress: 1.0,
    peakStart: 0.96,
    peakEnd: 0.99,
    align: "center",
    headline: "LET'S CREATE\nSOMETHING\nEXTRAORDINARY",
    subline: "Ready to bring your vision into a new dimension?",
    tag: "START YOUR PROJECT",
  },
];

/* ── Overlay Component ────────────────────────── */

function TextOverlay({
  section,
  scrollProgress,
}: {
  section: TextSection;
  scrollProgress: number;
}) {
  const { startProgress, endProgress, peakStart, peakEnd, align } = section;

  // Calculate opacity: fade in → peak → fade out
  let opacity = 0;
  if (scrollProgress >= startProgress && scrollProgress <= endProgress) {
    if (scrollProgress < peakStart) {
      opacity = (scrollProgress - startProgress) / (peakStart - startProgress);
    } else if (scrollProgress <= peakEnd) {
      opacity = 1;
    } else {
      opacity = 1 - (scrollProgress - peakEnd) / (endProgress - peakEnd);
    }
  }

  // Calculate transform
  const translateY =
    scrollProgress < peakStart
      ? (1 - opacity) * 40
      : scrollProgress > peakEnd
      ? (1 - opacity) * -30
      : 0;

  const translateX =
    align === "left"
      ? scrollProgress < peakStart
        ? (1 - opacity) * -60
        : 0
      : align === "right"
      ? scrollProgress < peakStart
        ? (1 - opacity) * 60
        : 0
      : 0;

  if (opacity < 0.01) return null;

  const alignClass =
    align === "center"
      ? "justify-center text-center px-6"
      : align === "left"
      ? "justify-start text-left pl-8 md:pl-16 lg:pl-24"
      : "justify-end text-right pr-8 md:pr-16 lg:pr-24";

  const isCta = section.id === "cta";

  return (
    <div className={`text-overlay ${alignClass}`}>
      <div
        className="text-overlay-content"
        style={{
          opacity,
          transform: `translate(${translateX}px, ${translateY}px)`,
          transition: "none",
        }}
      >
        {section.tag && (
          <div className="flex items-center gap-3 mb-6" style={{ justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }}>
            <span className="accent-line" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
              {section.tag}
            </span>
          </div>
        )}

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 whitespace-pre-line ${
            isCta ? "gradient-text-accent" : "gradient-text"
          }`}
        >
          {section.headline}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed whitespace-pre-line max-w-[480px]"
          style={{ marginLeft: align === "right" ? "auto" : undefined }}
        >
          {section.subline}
        </p>

        {isCta && (
          <div className="mt-10" style={{ display: "flex", justifyContent: "center" }}>
            <button className="cta-button">
              <span>Start a Project</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Scroll Progress Indicator ────────────────── */

function ScrollIndicator({ progress }: { progress: number }) {
  if (progress > 0.02) return null; // Fade out quickly on the new long scroll
  const opacity = 1 - progress / 0.02;

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      style={{ opacity }}
    >
      <span className="text-[11px] tracking-[0.3em] uppercase text-white/30">
        Scroll to explore
      </span>
      <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────── */

interface ScrollSequenceProps {
  onLoadProgress: (progress: number) => void;
  onLoadComplete: () => void;
}

export default function ScrollSequence({
  onLoadProgress,
  onLoadComplete,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const lastDrawnFrameRef = useRef(-1);
  const rafRef = useRef<number>(0);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Track progress for text overlays
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrentProgress(v);
  });

  // Draw frame to canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img) return;

    // Set canvas dimensions to match image
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageLoad = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      onLoadProgress(progress);

      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = images;
        setIsReady(true);
        onLoadComplete();
        // draw first frame
        drawFrame(0);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = onImageLoad;
      img.onerror = onImageLoad; // count errors too to avoid blocking
      images[i] = img;
    }

    return () => {
      // cleanup
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [onLoadProgress, onLoadComplete, drawFrame]);

  // Animate canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isReady) return;
    const index = Math.min(Math.round(latest), TOTAL_FRAMES - 1);
    if (index !== lastDrawnFrameRef.current) {
      lastDrawnFrameRef.current = index;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(index);
      });
    }
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (isReady && lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady, drawFrame]);

  return (
    <div ref={containerRef} className="relative h-[2000vh]">
      {/* Sticky Canvas Container */}
      <div className="scroll-canvas-container">
        <canvas ref={canvasRef} className="scroll-canvas" />

        {/* Vignette overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.5) 100%)",
          }}
        />

        {/* Text Overlays */}
        {TEXT_SECTIONS.map((section) => (
          <TextOverlay
            key={section.id}
            section={section}
            scrollProgress={currentProgress}
          />
        ))}

        {/* Scroll Indicator */}
        <ScrollIndicator progress={currentProgress} />
      </div>
    </div>
  );
}
