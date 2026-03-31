"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECTS = [
  { id: 1, title: "Neon Genesis", category: "Motion Control" },
  { id: 2, title: "Aero Dynamics", category: "Real-time Render" },
  { id: 3, title: "Velocity", category: "Brand Identity" },
  { id: 4, title: "Obelisk", category: "Cinematic 3D" },
  { id: 5, title: "Syndicate", category: "Character Design" },
  { id: 6, title: "Void Space", category: "Environment Art" },
];

export default function WorkPage() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent-purple/30 selection:text-white">
      <div className="noise-overlay" />
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="accent-line w-8" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
              Portfolio
            </span>
            <span className="accent-line w-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text mb-6">
            OUR WORK
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of dimensional storytelling. From striking motion design to
            hyper-realistic environments, every project is a precise orchestration of form and light.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div 
              key={project.id}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden glass cursor-pointer animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/[0.08] transition-colors duration-500" />
              
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[11px] tracking-[0.2em] uppercase text-accent-purple font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
