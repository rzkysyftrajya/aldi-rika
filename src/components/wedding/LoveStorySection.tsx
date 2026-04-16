import { useDirectionalAnimation, useScrollAnimation } from "@/hooks/useScrollAnimation";
import ornamentDivider from "@/assets/ornament-divider.png";
import { Heart, Sparkles } from "lucide-react";

const stories = [
  { year: "2020", title: "Pertama Bertemu", desc: "Kami pertama kali bertemu di sebuah acara kampus yang tak terduga.", icon: "💫" },
  { year: "2021", title: "Mulai Dekat", desc: "Semakin sering berkomunikasi dan menemukan banyak kecocokan.", icon: "💬" },
  { year: "2023", title: "Menjalin Hubungan", desc: "Memutuskan untuk berjalan bersama dalam sebuah komitmen.", icon: "💕" },
  { year: "2025", title: "Menikah", desc: "Melangkah ke jenjang pernikahan dengan penuh cinta dan harapan.", icon: "💍" },
];

const LoveStorySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/40 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-3" />
          <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Our Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Love Story</h2>
          <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-14 opacity-35" loading="lazy" width={800} height={512} />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          <div className="space-y-8">
            {stories.map((s, i) => (
              <StoryItem key={i} story={s} index={i} direction={i % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryItem = ({ story, index, direction }: { story: typeof stories[0]; index: number; direction: 'left' | 'right' }) => {
  const { ref, isVisible, getTransform } = useDirectionalAnimation(direction);

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(isVisible),
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
      }}
    >
      {/* Center dot */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40 z-10 ring-4 ring-background" />
      
      <div className="glass-card rounded-2xl p-6 max-w-[260px] mx-auto text-center group hover:scale-[1.02]">
        <span className="text-2xl mb-2 block">{story.icon}</span>
        <span className="text-primary font-sans text-[10px] tracking-[0.4em] uppercase font-medium">{story.year}</span>
        <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{story.title}</h3>
        <p className="text-muted-foreground font-sans text-sm leading-relaxed">{story.desc}</p>
      </div>
    </div>
  );
};

export default LoveStorySection;
