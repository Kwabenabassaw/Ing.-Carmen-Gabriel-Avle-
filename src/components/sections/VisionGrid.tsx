import { motion } from 'motion/react';
import { Gavel, TrendingUp, House, ShieldCheck, Gem } from 'lucide-react';

interface VisionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface VisionGridProps {
  items: VisionItem[];
}

const iconMap: Record<string, any> = {
  Gavel: Gavel,
  TrendingUp: TrendingUp,
  House: House,
  ShieldCheck: ShieldCheck,
  Gem: Gem,
};

export function VisionGrid({ items }: VisionGridProps) {
  return (
    <section id="vision" className="py-24 bg-[#015830] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vision for BHOBU</h2>
          <p className="text-blue-200 text-xl font-light">2026 – 2028</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-8 text-yellow-500 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
