"use client";

interface LoadingScreenProps {
  progress: number;
  isLoaded: boolean;
}

export default function LoadingScreen({ progress, isLoaded }: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${isLoaded ? "loaded" : ""}`}>
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Logo */}
      <div className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E03030] to-[#7B2FBE] flex items-center justify-center">
          <span className="text-white text-lg font-bold">E</span>
        </div>
        <span className="text-white/80 text-xl font-semibold tracking-tight">
          ELYSIUM
        </span>
      </div>

      {/* Spinner */}
      <div className="loader-ring" />

      {/* Progress text */}
      <div className="loader-progress">
        Loading Experience — {progress}%
      </div>

      {/* Progress bar */}
      <div className="loader-bar-track">
        <div
          className="loader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-8 text-[11px] tracking-[0.4em] uppercase text-white/20">
        Where Dimensions Come Alive
      </p>
    </div>
  );
}
