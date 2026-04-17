import { motion } from 'framer-motion';
import { portfolioConfig } from '../../data/config';

export default function Hero() {
  const { personal } = portfolioConfig;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-6xl sm:text-8xl md:text-9xl font-serif text-black leading-[1] tracking-tighter mb-8 uppercase"
            >
              <span className="block">{personal.name.split(' ')[0]}</span>
              <span className="block text-black">{personal.name.split(' ')[1]}</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4 lg:pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full h-1 bg-black mb-8 hidden lg:block"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl md:text-2xl font-mono font-bold text-black mb-6 uppercase tracking-tight"
            >
              {personal.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm md:text-base text-black leading-relaxed font-mono font-medium mb-10"
            >
              {personal.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex space-x-6"
            >
              <a 
                href="#projects"
                className="text-sm uppercase tracking-tight font-mono font-bold text-black border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Selected Work
              </a>
              <a 
                href="#contact"
                className="text-sm uppercase tracking-tight font-mono font-bold text-black border-2 border-transparent hover:border-black px-6 py-3 transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
