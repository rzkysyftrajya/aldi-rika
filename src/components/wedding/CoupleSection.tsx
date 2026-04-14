import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import floralBouquet from "@/assets/floral-bouquet.png";
import ornamentDivider from "@/assets/ornament-divider.png";
import { Heart } from "lucide-react";

const CoupleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 bg-gradient-to-b from-cream via-background to-cream relative overflow-hidden">
      {/* Single soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-2">Bride & Groom</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Mempelai</h2>
        <div className="ornament-line mb-14">
          <Heart className="w-3 h-3 text-primary" />
        </div>

        <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Groom */}
          <div className="flex flex-col items-center group" style={{ animationDelay: '0.1s' }}>
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-sage-light to-cream border-4 border-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 shadow-xl">
                <span className="text-6xl">🤵</span>
              </div>
              {/* Single small bouquet - bottom right only */}
              <img src={floralBouquet} alt="" className="absolute -bottom-3 -right-3 w-16 opacity-35 rotate-12 pointer-events-none" loading="lazy" width={512} height={512} />
            </div>
            <h3 className="font-script text-3xl text-primary mb-3 drop-shadow-sm">Muhammad Aldi Siagian</h3>
            <img src={ornamentDivider} alt="" className="w-28 mb-3 opacity-35" loading="lazy" width={800} height={512} />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
              Putra dari<br />
              <span className="text-foreground font-medium">Bapak Hariman Siagian</span><br />& <span className="text-foreground font-medium">Ibu Anis Wati Lubis</span>
            </p>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center group" style={{ animationDelay: '0.3s' }}>
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cream to-sage-light border-4 border-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 shadow-xl">
                <span className="text-6xl">👰</span>
              </div>
              <img src={floralBouquet} alt="" className="absolute -bottom-3 -left-3 w-16 opacity-35 -rotate-12 scale-x-[-1] pointer-events-none" loading="lazy" width={512} height={512} />
            </div>
            <h3 className="font-script text-3xl text-primary mb-3 drop-shadow-sm">Rikaerscaa</h3>
            <img src={ornamentDivider} alt="" className="w-28 mb-3 opacity-35" loading="lazy" width={800} height={512} />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
              Putri dari<br />
              <span className="text-foreground font-medium">Bapak Sutrimo</span><br />& <span className="text-foreground font-medium">Ibu Legini</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
