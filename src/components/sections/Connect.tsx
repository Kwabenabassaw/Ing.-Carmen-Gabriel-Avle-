import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

interface ConnectProps {
  email: string;
  phone: string;
}

export function Connect({ email, phone }: ConnectProps) {
  return (
    <section id="connect" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white">Reach Out</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              I am always open to discussing new leadership opportunities, BHOBU developmental initiatives, or professional consultations.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${email}`} className="flex items-center space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-900 dark:hover:bg-slate-800 hover:text-white transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-900 dark:text-white shadow-sm group-hover:bg-yellow-500">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-70">Email</p>
                  <p className="font-semibold">{email}</p>
                </div>
              </a>

              <a href={`tel:${phone}`} className="flex items-center space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-900 dark:hover:bg-slate-800 hover:text-white transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-900 dark:text-white shadow-sm group-hover:bg-yellow-500">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-70">Phone</p>
                  <p className="font-semibold">{phone}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-8">Follow My Journey</h3>
            <div className="space-y-6 mb-12">
              <p className="text-blue-100 flex items-center">
                <MapPin className="mr-3 text-yellow-500" size={20} />
                Accra, Ghana
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-blue-900 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-blue-900 transition-all">
                <Twitter size={24} />
              </a>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm italic font-light">"Leadership is not about being in charge. It is about taking care of those in your charge."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
