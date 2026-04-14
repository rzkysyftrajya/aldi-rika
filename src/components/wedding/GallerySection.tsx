import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ornamentDivider from "@/assets/ornament-divider.png";
import { Camera, Heart, Sparkles } from "lucide-react";

const placeholders = [
  { bg: "from-sage-light to-cream", span: "col-span-2 row-span-2" },
  { bg: "from-cream to-sage-light/50", span: "" },
  { bg: "from-primary/10 to-cream", span: "" },
  { bg: "from-cream-dark to-sage-light", span: "" },
  { bg: "from-sage-light/60 to-cream-dark", span: "col-span-2" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 bg-gradient-to-b from-background via-cream/30 to-cream relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/4 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Our Moments</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Galeri Foto</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-12 opacity-40" loading="lazy" width={800} height={512} />

        <div className={`grid grid-cols-3 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`${item.span} bg-gradient-to-br ${item.bg} rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl flex items-center justify-center relative border border-border/20`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transition: `all 0.5s ease-out ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
                <Camera className="w-6 h-6" />
                <span className="font-sans text-[9px] tracking-wider uppercase">Foto {i + 1}</span>
              </div>
              {i === 0 && (
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-3.5 h-3.5 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
