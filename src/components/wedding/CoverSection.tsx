import floralTop from "@/assets/floral-top.png";
import floralBottom from "@/assets/floral-bottom.png";
import floralWreath from "@/assets/floral-wreath.png";
import { Heart, Sparkles } from "lucide-react";

interface CoverSectionProps {
  onOpen: () => void;
}

const CoverSection = ({ onOpen }: CoverSectionProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-background via-cream/30 to-cream overflow-hidden">
      {/* Drifting petals - lightweight CSS shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${10 + i * 15}%`,
            animation: `petal-drift ${8 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* Soft glow - single centered */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/6 blur-3xl" style={{ animation: 'breathe 6s ease-in-out infinite' }} />

      {/* Top floral - centered, clean */}
      <img src={floralTop} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-72 md:w-96 opacity-40 pointer-events-none" width={800} height={512} />

      <div className="text-center z-10 px-6" style={{ animation: 'reveal-up 1.2s ease-out forwards' }}>
        {/* Wreath behind names */}
        <div className="relative inline-block mb-2">
          <img src={floralWreath} alt="" className="absolute -inset-10 md:-inset-14 w-[calc(100%+5rem)] md:w-[calc(100%+7rem)] h-auto opacity-30 pointer-events-none" width={512} height={512} />
          <div className="relative">
            <div className="mb-4">
              <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
              <Heart className="w-6 h-6 text-primary mx-auto animate-heartbeat" />
            </div>
            <p className="text-muted-foreground font-sans text-[10px] tracking-[0.5em] uppercase mb-8">The Wedding of</p>
            
            <h1 className="font-script text-5xl md:text-7xl text-primary leading-tight mb-1 drop-shadow-sm">
              Aldi
            </h1>
            <div className="flex items-center justify-center gap-3 my-3">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <p className="font-serif text-2xl md:text-3xl text-gold/70">&</p>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h1 className="font-script text-5xl md:text-7xl text-primary leading-tight mb-4 drop-shadow-sm">
              Ecaa
            </h1>
          </div>
        </div>

        <div className="ornament-line mb-4">
          <span className="text-muted-foreground font-sans text-[10px] tracking-[0.4em]">11 • 05 • 2026  &  30 • 05 • 2025</span>
        </div>
        
        <p className="text-muted-foreground/70 font-sans text-[10px] tracking-[0.2em] uppercase mb-8">Insya Allah</p>

        <button
          onClick={onOpen}
          className="group relative px-12 py-4 bg-gradient-to-r from-primary via-sage-dark to-primary text-primary-foreground font-sans text-[10px] tracking-[0.3em] uppercase rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 shimmer-btn"
          style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 opacity-80" />
            Buka Undangan
            <Heart className="w-3.5 h-3.5 group-hover:animate-heartbeat" />
          </span>
        </button>
      </div>

      {/* Bottom floral - centered, clean */}
      <img src={floralBottom} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 md:w-[28rem] opacity-45 pointer-events-none" loading="lazy" width={800} height={512} />
    </div>
  );
};

export default CoverSection;
