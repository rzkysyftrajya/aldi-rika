import floralBottom from "@/assets/floral-bottom.png";
import floralWreath from "@/assets/floral-wreath.png";
import ornamentDivider from "@/assets/ornament-divider.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles } from "lucide-react";

const ClosingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-background via-cream/30 to-cream">
      {/* Single glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className={`max-w-lg mx-auto text-center z-10 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <Heart className="w-7 h-7 text-primary mx-auto mb-6 animate-heartbeat" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-6">Thank You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Terima Kasih</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-6 opacity-40" loading="lazy" width={800} height={512} />
        <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>

        {/* Quote card with wreath */}
        <div className="relative inline-block mb-10">
          <img src={floralWreath} alt="" className="absolute -inset-8 w-[calc(100%+4rem)] h-auto opacity-20 pointer-events-none" loading="lazy" width={512} height={512} />
          <div className="glass-card rounded-2xl p-10 relative border border-primary/10">
            <p className="font-serif text-xl text-foreground italic mb-4 leading-relaxed">
              "Mawaddah Wa Rahmah"
            </p>
            <div className="ornament-line mb-4">
              <Heart className="w-3 h-3 text-primary" />
            </div>
            <p className="font-script text-3xl text-primary">
              Aldi & Ecaa
            </p>
          </div>
        </div>

        <p className="text-muted-foreground/50 font-sans text-[10px] tracking-[0.3em] uppercase">
          #AldiDanEcaa
        </p>
      </div>

      {/* Single bottom floral - centered */}
      <img src={floralBottom} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-96 opacity-35 pointer-events-none" loading="lazy" width={800} height={512} />
    </section>
  );
};

export default ClosingSection;
