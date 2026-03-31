"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "Cinematic 3D Animation",
    description: "High-fidelity, pre-rendered animation sequences for campaigns, product launches, and narrative storytelling. We sculpt motion with keyframe precision.",
  },
  {
    title: "Real-time Rendering",
    description: "Leveraging Unreal Engine and Unity to create interactive experiences, virtual production assets, and zero-latency visual systems for the web.",
  },
  {
    title: "Environment & Character Sculpting",
    description: "Detailed ZBrush sculpting and optimized topology for game-ready or film-ready assets. Material simulation pushed to photorealistic boundaries.",
  },
  {
    title: "Motion Identity",
    description: "Bringing brands to life. We design kinetic topographies, logo reveals, and design systems that move as well as they look statically.",
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent-purple/30 selection:text-white">
      <div className="noise-overlay" />
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start animate-fade-in">
          
          {/* Hero Column */}
          <div className="sticky top-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line w-8" />
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
                Capabilities
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text mb-6">
              SERVICES
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We cover the entire 3D pipeline from conceptual ideation to final composite, 
              delivering visual excellence across all technical formats.
            </p>
            
            <button className="cta-button scale-90 origin-left">
              <span>Discuss a brief</span>
            </button>
          </div>

          {/* List Column */}
          <div className="flex flex-col gap-8">
            {SERVICES.map((service, i) => (
              <div 
                key={service.title} 
                className="glass p-10 md:p-12 rounded-2xl border-l-[3px] border-l-accent-purple/50 hover:border-l-accent-purple transition-all duration-500 animate-slide-up hover:-translate-y-2 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl font-light text-white/[0.03] mb-4 group-hover:text-white/10 transition-colors duration-500 font-serif">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white/90 mb-4 tracking-wide group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
