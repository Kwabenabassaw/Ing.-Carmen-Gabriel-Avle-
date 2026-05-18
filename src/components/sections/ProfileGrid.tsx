import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, ChartPie, TrendingUp, Globe, ShoppingBag, Database } from 'lucide-react';

interface ProfileItem {
  id: number;
  text: string;
  category: string;
}

interface ProfileGridProps {
  items: ProfileItem[];
}

const iconMap: Record<string, any> = {
  'Expertise': Briefcase,
  'Leadership': TrendingUp,
  'Banking & Finance': Database,
  'FMCG': ShoppingBag,
  'Marketing': Globe,
  'Sales': ChartPie,
  'Education': GraduationCap,
  'Certification': Award,
};

export function ProfileGrid({ items }: ProfileGridProps) {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">Brief Profile</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.category] || Briefcase;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 dark:border dark:border-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item.text}
                </p>
                <span className="inline-block mt-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {item.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
