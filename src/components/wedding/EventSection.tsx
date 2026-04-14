import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Calendar, Navigation, Heart, Sparkles } from "lucide-react";
import ornamentDivider from "@/assets/ornament-divider.png";

const EventSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-background via-cream/20 to-background">
      {/* Single centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Save The Date</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Jadwal Acara</h2>
        <img src={ornamentDivider} alt="" className="w-40 mx-auto mb-12 opacity-40" loading="lazy" width={800} height={512} />

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* Akad Nikah Card */}
            <div
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.1s' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full" />
              <div className="relative z-10">
                <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
                <h3 className="font-script text-3xl text-primary mb-2">Akad Nikah</h3>
                <div className="ornament-line mb-6">
                  <Heart className="w-2.5 h-2.5 text-primary/50" />
                </div>
                <div className="space-y-3 text-muted-foreground font-sans text-sm">
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Senin, 11 Mei 2026</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Sesuai Undangan</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Jl. Perdamaian, Desa Kolam Psr 16, Dusun 9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resepsi Card */}
            <div
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.3s' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
              <div className="relative z-10">
                <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
                <h3 className="font-script text-3xl text-primary mb-2">Resepsi Pernikahan</h3>
                <div className="ornament-line mb-6">
                  <Heart className="w-2.5 h-2.5 text-primary/50" />
                </div>
                <div className="space-y-3 text-muted-foreground font-sans text-sm">
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Sabtu, 30 Mei 2026</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Sesuai Undangan</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-primary/5">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-xs">Jl. Perdamaian, Desa Kolam Psr 16, Dusun 9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maps button */}
          <div className="mt-8">
            <a
              href="https://www.google.com/maps?q=3.640052,98.767540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-sage-dark text-primary-foreground font-sans text-[10px] tracking-[0.2em] uppercase rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Navigation className="w-3.5 h-3.5" />
              Buka Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-xl border border-border/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.0!2d98.76754!3d3.640052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMzgnMjQuMiJOIDk4wrA0NicwMy4xIkU!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
