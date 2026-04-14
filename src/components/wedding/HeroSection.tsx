import floralTop from "@/assets/floral-top.png";
import floralFrame from "@/assets/floral-frame-horizontal.png";
import ornamentDivider from "@/assets/ornament-divider.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-6">
      {/* Single top floral accent */}
      <img src={floralTop} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-30 pointer-events-none" width={800} height={512} />

      {/* Single soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-sage-light/15 blur-3xl" />

      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-8">Bismillahirrahmanirrahim</p>
        
        <p className="text-muted-foreground font-sans text-xs mb-6 tracking-[0.2em] uppercase">We are getting married</p>
        
        {/* Floral frame - clean, no overlap */}
        <div className="relative inline-block">
          <img src={floralFrame} alt="" className="absolute -inset-x-6 -inset-y-2 w-[calc(100%+3rem)] h-auto opacity-20 pointer-events-none" loading="lazy" width={1024} height={512} />
          <h2 className="font-script text-4xl md:text-6xl text-primary leading-snug mb-2 relative drop-shadow-sm">
            Muhammad Aldi Siagian
          </h2>
          
          <div className="flex items-center justify-center gap-4 my-4 relative">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <Heart className="w-5 h-5 text-primary animate-heartbeat" />
            <div className="w-14 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          
          <h2 className="font-script text-4xl md:text-6xl text-primary leading-snug mb-6 relative drop-shadow-sm">
            Rikaerscaa
          </h2>
        </div>

        <img src={ornamentDivider} alt="" className="w-44 mx-auto mb-6 opacity-40" loading="lazy" width={800} height={512} />
        
        <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-md mx-auto italic">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram."
        </p>
        <p className="text-primary/70 font-sans text-xs mt-3 tracking-[0.2em]">— QS. Ar-Rum: 21</p>
      </div>
    </section>
  );
};

export default HeroSection;
