import { motion } from 'framer-motion';
import { portfolioConfig } from '../../data/config';
import { ArrowRight } from 'lucide-react';

const cinematicTransition = { ease: "circOut" as const, duration: 0.7 };

export default function Contact() {
  const { personal } = portfolioConfig;

  return (
    <section id="contact" className="py-32 md:py-48 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20px" }}
          transition={cinematicTransition}
          className="flex flex-col items-start"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-12">
            Initiate Contact
          </p>
          
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-serif text-foreground leading-[1] tracking-tight mb-16 max-w-5xl hover:text-accent transition-colors duration-700">
            Let's build something extraordinary.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center w-full border-t border-white/10 pt-16">
            <a 
              href={`mailto:${personal.email}`}
              className="text-2xl md:text-3xl font-serif text-foreground hover:text-muted-foreground transition-colors group flex items-center"
            >
              {personal.email}
              <ArrowRight className="ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" size={28} strokeWidth={1} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
