import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Sparkles } from "lucide-react";
import ornamentDivider from "@/assets/ornament-divider.png";

const AKAD_DATE = new Date("2026-05-11T08:00:00+07:00").getTime();
const RESEPSI_DATE = new Date("2026-05-30T08:00:00+07:00").getTime();

const useCountdown = (target: number) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
};

const CountdownSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const akadTime = useCountdown(AKAD_DATE);
  const resepsiTime = useCountdown(RESEPSI_DATE);

  const unitLabels = ["Hari", "Jam", "Menit", "Detik"];
  const toUnits = (t: typeof akadTime) => [t.days, t.hours, t.minutes, t.seconds];

  return (
    <section ref={ref} className="py-28 px-6 bg-gradient-to-b from-primary/5 via-primary/8 to-primary/5 relative overflow-hidden">
      {/* Subtle ring decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-primary/8 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/8 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/4 rounded-full blur-3xl" />
      
      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <Heart className="w-5 h-5 text-primary mx-auto mb-4 animate-heartbeat" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Counting Down To</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Hari Bahagia</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-10 opacity-40" loading="lazy" width={800} height={512} />

        {/* Akad Countdown */}
        <div className="mb-10">
          <p className="font-script text-2xl text-primary mb-2">Akad Nikah</p>
          <p className="text-muted-foreground font-sans text-xs mb-5 tracking-wider">Senin, 11 Mei 2026</p>
          <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-lg mx-auto">
            {toUnits(akadTime).map((val, i) => (
              <div key={`akad-${i}`} className="glass-card rounded-2xl p-3 md:p-5 group hover:scale-105 transition-all duration-300">
                <span className="font-serif text-2xl md:text-4xl text-foreground block group-hover:text-primary transition-colors duration-300">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground font-sans text-[9px] md:text-[10px] tracking-wider uppercase mt-1 block">
                  {unitLabels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="ornament-line mb-10">
          <Heart className="w-3 h-3 text-primary/40" />
        </div>

        {/* Resepsi Countdown */}
        <div>
          <p className="font-script text-2xl text-primary mb-2">Resepsi Pernikahan</p>
          <p className="text-muted-foreground font-sans text-xs mb-5 tracking-wider">Sabtu, 30 Mei 2026</p>
          <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-lg mx-auto">
            {toUnits(resepsiTime).map((val, i) => (
              <div key={`resepsi-${i}`} className="glass-card rounded-2xl p-3 md:p-5 group hover:scale-105 transition-all duration-300">
                <span className="font-serif text-2xl md:text-4xl text-foreground block group-hover:text-primary transition-colors duration-300">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground font-sans text-[9px] md:text-[10px] tracking-wider uppercase mt-1 block">
                  {unitLabels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
