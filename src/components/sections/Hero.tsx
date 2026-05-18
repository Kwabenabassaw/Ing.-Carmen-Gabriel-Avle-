import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  name: string;
  titles: string[];
  image: string;
}

export function Hero({ name, titles, image }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-blue-900">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-yellow-500/30 overflow-hidden relative shadow-2xl">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              {name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {titles.map((title, i) => (
                <span
                  key={title}
                  className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
                >
                  {title}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#achievements"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-yellow-500 text-blue-900 font-bold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                View Track Record
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
