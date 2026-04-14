import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ornamentDivider from "@/assets/ornament-divider.png";
import { Heart, Sparkles } from "lucide-react";

const stories = [
  { year: "2020", title: "Pertama Bertemu", desc: "Kami pertama kali bertemu di sebuah acara kampus yang tak terduga." },
  { year: "2021", title: "Mulai Dekat", desc: "Semakin sering berkomunikasi dan menemukan banyak kecocokan." },
  { year: "2023", title: "Menjalin Hubungan", desc: "Memutuskan untuk berjalan bersama dalam sebuah komitmen." },
  { year: "2025", title: "Menikah", desc: "Melangkah ke jenjang pernikahan dengan penuh cinta dan harapan." },
];

const LoveStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 bg-gradient-to-b from-cream via-background to-cream relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Our Journey</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Love Story</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-12 opacity-40" loading="lazy" width={800} height={512} />

        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-14">
            {stories.map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${0.2 + i * 0.15}s`,
                }}
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-sage-dark flex items-center justify-center z-10 mb-4 shadow-lg">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-primary font-sans text-xs tracking-widest mb-1 font-medium">{s.year}</span>
                <h3 className="font-serif text-lg text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground font-sans text-sm max-w-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;
