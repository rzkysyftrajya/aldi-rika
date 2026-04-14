import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Copy, Check, Gift, CreditCard, Sparkles } from "lucide-react";
import ornamentDivider from "@/assets/ornament-divider.png";

const accounts = [
  { bank: "Bank BCA", number: "1234567890", name: "Muhammad Aldi Siagian" },
  { bank: "Bank Mandiri", number: "0987654321", name: "Rikaerscaa" },
];

const GiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [copied, setCopied] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section ref={ref} className="py-28 px-6 bg-gradient-to-b from-cream via-background to-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/4 rounded-full blur-3xl" />
      
      <div className={`max-w-lg mx-auto text-center transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Sparkles className="w-4 h-4 text-gold/50 mx-auto mb-2" />
        <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-4">Wedding Gift</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Amplop Digital</h2>
        <img src={ornamentDivider} alt="" className="w-36 mx-auto mb-4 opacity-40" loading="lazy" width={800} height={512} />
        <p className="text-muted-foreground font-sans text-sm mb-10 max-w-sm mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
        </p>

        <div className="space-y-4">
          {accounts.map((acc, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-left group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-border/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: `all 0.5s ease-out ${0.1 + i * 0.15}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-sage-light flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[10px] text-primary font-medium tracking-[0.2em] uppercase mb-1">{acc.bank}</p>
                  <p className="font-serif text-lg text-foreground mb-0.5 tracking-wide">{acc.number}</p>
                  <p className="font-sans text-sm text-muted-foreground">a.n. {acc.name}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(acc.number, i)}
                className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  copied === i ? "bg-primary/20 text-primary" : "bg-primary/5 text-primary hover:bg-primary/15"
                }`}
              >
                {copied === i ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied === i ? "Tersalin!" : "Salin No. Rekening"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
