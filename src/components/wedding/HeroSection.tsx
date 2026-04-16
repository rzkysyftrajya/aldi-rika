import floralTop from "@/assets/floral-top.png";
import floralFrame from "@/assets/floral-frame-horizontal.png";
import ornamentDivider from "@/assets/ornament-divider.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-6">
      {/* Layered bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--sage-light))_0%,_transparent_70%)] opacity-40" />
      <img src={floralTop} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-25 pointer-events-none" style={{ animation: 'gentle-sway 8s ease-in-out infinite' }} width={800} height={512} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" style={{ animation: 'breathe 8s ease-in-out infinite' }} />

      <div className={`text-center z-10 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-3" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-8">Bismillahirrahmanirrahim</p>
        <p className="text-muted-foreground font-sans text-[10px] mb-6 tracking-[0.3em] uppercase">We are getting married</p>
        
        <div className="relative inline-block">
          <img src={floralFrame} alt="" className="absolute -inset-x-6 -inset-y-2 w-[calc(100%+3rem)] h-auto opacity-15 pointer-events-none" style={{ animation: 'breathe 10s ease-in-out infinite' }} loading="lazy" width={1024} height={512} />
          <h2 className="font-script text-4xl md:text-6xl text-primary leading-snug mb-2 relative drop-shadow-sm">
            Muhammad Aldi Siagian
          </h2>
          <div className="flex items-center justify-center gap-5 my-5 relative">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <Heart className="w-5 h-5 text-primary animate-heartbeat" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <h2 className="font-script text-4xl md:text-6xl text-primary leading-snug mb-6 relative drop-shadow-sm">
            Rikaerscaa
          </h2>
        </div>

        <img src={ornamentDivider} alt="" className="w-44 mx-auto mb-8 opacity-35" loading="lazy" width={800} height={512} />
        
        <div className="glass-card rounded-2xl px-8 py-6 max-w-md mx-auto">
          <p className="text-muted-foreground font-sans text-sm leading-[1.8] italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram."
          </p>
          <p className="text-primary/60 font-sans text-[10px] mt-4 tracking-[0.3em]">— QS. Ar-Rum: 21</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
