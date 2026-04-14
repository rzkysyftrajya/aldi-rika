import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ornamentDivider from "@/assets/ornament-divider.png";
import { Send, MessageCircle, User, Clock, Heart, Sparkles } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const STORAGE_KEY = "wedding-wishes";

const getWishes = (): Comment[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Comment[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setWishes(getWishes());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    const newWish: Comment = { id: Date.now().toString(), name: name.trim(), message: message.trim(), timestamp: Date.now() };
    const updated = [newWish, ...wishes];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setWishes(updated);
    setName("");
    setMessage("");
    setTimeout(() => setSubmitting(false), 500);
  };

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <section ref={ref} className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-cream via-background to-cream">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Wishes</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ucapan & Doa</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-4 opacity-40" loading="lazy" width={800} height={512} />
        <p className="text-muted-foreground font-sans text-sm mb-10 max-w-md mx-auto">
          Berikan ucapan dan doa terbaik untuk kedua mempelai
        </p>

        <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-11 pr-5 py-3.5 rounded-2xl glass border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" />
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
            <textarea placeholder="Tulis ucapan & doa untuk kedua mempelai..." value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="w-full pl-11 pr-5 py-3.5 rounded-2xl glass border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-all" />
          </div>
          <button type="submit" disabled={submitting} className="w-full py-3.5 bg-gradient-to-r from-primary via-sage-dark to-primary text-primary-foreground font-sans text-[10px] tracking-[0.25em] uppercase rounded-2xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] shadow-lg shimmer-btn">
            <Send className="w-3.5 h-3.5" />
            {submitting ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </form>

        {wishes.length > 0 && (
          <div className="mt-12 space-y-4 text-left max-h-[400px] overflow-y-auto pr-2">
            <p className="text-center text-muted-foreground font-sans text-[10px] tracking-[0.3em] uppercase mb-6">
              <Heart className="w-3 h-3 text-primary inline mr-2" />
              {wishes.length} Ucapan
            </p>
            {wishes.map((w, i) => (
              <div
                key={w.id}
                className="glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.4s ease-out ${i * 0.05}s`,
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-sage-light flex items-center justify-center shadow-sm">
                      <span className="text-primary font-serif text-sm font-bold">{w.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="font-sans text-sm font-medium text-foreground">{w.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span className="font-sans text-[9px]">{formatTime(w.timestamp)}</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed pl-11">{w.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
