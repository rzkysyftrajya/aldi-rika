import { useDirectionalAnimation, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Calendar, Navigation, Heart, Sparkles } from "lucide-react";
import ornamentDivider from "@/assets/ornament-divider.png";

const EventDetail = ({ icon: Icon, text }: { icon: typeof Calendar; text: string }) => (
  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary/[0.04] border border-primary/[0.06] transition-all duration-300 hover:bg-primary/[0.08]">
    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
    <span className="font-medium text-foreground text-xs">{text}</span>
  </div>
);

const EventSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: akadRef, isVisible: akadVisible, getTransform: akadT } = useDirectionalAnimation('left');
  const { ref: resepsiRef, isVisible: resepsiVisible, getTransform: resepsiT } = useDirectionalAnimation('right');

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-3" />
          <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Save The Date</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Jadwal Acara</h2>
          <img src={ornamentDivider} alt="" className="w-40 mx-auto mb-12 opacity-35" loading="lazy" width={800} height={512} />
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Akad */}
          <div
            ref={akadRef}
            className="glass-card rounded-[1.5rem] p-7 relative overflow-hidden group"
            style={{
              opacity: akadVisible ? 1 : 0,
              transform: akadT(akadVisible),
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/[0.06] to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
              <h3 className="font-script text-2xl md:text-3xl text-primary mb-2">Akad Nikah</h3>
              <div className="ornament-line mb-5"><Heart className="w-2.5 h-2.5 text-primary/40" /></div>
              <div className="space-y-2.5">
                <EventDetail icon={Calendar} text="Senin, 11 Mei 2026" />
                <EventDetail icon={Clock} text="Sesuai Undangan" />
                <EventDetail icon={MapPin} text="Jl. Perdamaian, Desa Kolam Psr 16, Dusun 9" />
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div
            ref={resepsiRef}
            className="glass-card rounded-[1.5rem] p-7 relative overflow-hidden group"
            style={{
              opacity: resepsiVisible ? 1 : 0,
              transform: resepsiT(resepsiVisible),
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.06] to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
              <h3 className="font-script text-2xl md:text-3xl text-primary mb-2">Resepsi</h3>
              <div className="ornament-line mb-5"><Heart className="w-2.5 h-2.5 text-primary/40" /></div>
              <div className="space-y-2.5">
                <EventDetail icon={Calendar} text="Sabtu, 30 Mei 2025" />
                <EventDetail icon={Clock} text="Sesuai Undangan" />
                <EventDetail icon={MapPin} text="Jl. Perdamaian, Desa Kolam Psr 16, Dusun 9" />
              </div>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="mt-8">
          <a
            href="https://www.google.com/maps?q=3.640052,98.767540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-primary to-sage-dark text-primary-foreground font-sans text-[10px] tracking-[0.25em] uppercase rounded-full hover:opacity-90 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Navigation className="w-3.5 h-3.5" />
            Buka Google Maps
          </a>
        </div>

        <div className="mt-10 rounded-[1.5rem] overflow-hidden shadow-xl border border-border/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.0!2d98.76754!3d3.640052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMzgnMjQuMiJOIDk4wrA0NicwMy4xIkU!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%" height="260" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
