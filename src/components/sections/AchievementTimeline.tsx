import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Achievement {
  id: number;
  period: string;
  title: string;
  details: string;
}

interface AchievementTimelineProps {
  items: Achievement[];
}

export function AchievementTimeline({ items }: AchievementTimelineProps) {
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">Track Record</h2>
          <p className="text-slate-500 dark:text-slate-400">Decades of dedicated leadership in BHOBU affairs</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900/10 dark:bg-slate-800 md:left-1/2 md:-ml-[0.25px]" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 w-4 h-4 rounded-full border-2 border-blue-900 dark:border-yellow-500 bg-white dark:bg-slate-950 -translate-x-[7px] md:left-1/2 md:-ml-2 z-10 shadow-glow" />

                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-8">
                  <div className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-blue-900 dark:bg-yellow-500 text-white dark:text-slate-900 text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
