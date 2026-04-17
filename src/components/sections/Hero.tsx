import { motion } from 'framer-motion';
import { portfolioConfig } from '../../data/config';

const cinematicTransition = { ease: "circOut" as const, duration: 0.7 };

export default function Hero() {
  const { personal } = portfolioConfig;

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-24 pb-12 overflow-hidden">
      {/* Abstract dark ambient lighting */}
      <div className="absolute top-0 right-0 w-3/4 h-screen bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={cinematicTransition}
              className="text-6xl sm:text-8xl md:text-9xl font-serif text-foreground leading-[1.1] tracking-tight mb-8"
            >
              <span className="block">{personal.name.split(' ')[0]}</span>
              <span className="block text-muted-foreground italic">{personal.name.split(' ')[1]}</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4 lg:pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...cinematicTransition, delay: 0.4 }}
              className="w-full h-px bg-white/10 mb-8 hidden lg:block"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...cinematicTransition, delay: 0.2 }}
              className="text-xl md:text-2xl font-sans font-light text-foreground mb-6"
            >
              {personal.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...cinematicTransition, delay: 0.3 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans font-light mb-10"
            >
              {personal.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...cinematicTransition, delay: 0.6 }}
              className="flex space-x-8"
            >
              <a 
                href="#projects"
                className="text-sm uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors relative group py-2"
              >
                Selected Work
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-100 transition-transform duration-500 ease-out group-hover:scale-x-0" />
              </a>
              <a 
                href="#contact"
                className="text-sm uppercase tracking-widest font-sans text-muted-foreground hover:text-foreground transition-colors relative group py-2"
              >
                Let's Talk
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
