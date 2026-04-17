import { motion } from 'framer-motion';
import { portfolioConfig } from '../../data/config';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioConfig;

  return (
    <section id="contact" className="py-32 md:py-48 relative border-t-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-start"
        >
          <p className="text-xs uppercase tracking-widest text-black font-mono font-bold mb-12 border-2 border-black px-2 py-1 bg-white">
            Initiate Contact
          </p>
          
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-serif text-black leading-[1] tracking-tighter mb-16 max-w-5xl uppercase">
            Let's build something extraordinary.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center w-full border-t-2 border-black pt-16">
            <a 
              href={`mailto:${personal.email}`}
              className="text-2xl md:text-3xl font-mono font-bold text-black border-2 border-transparent hover:border-black hover:bg-black hover:text-white px-6 py-4 transition-colors group flex items-center"
            >
              {personal.email}
              <ArrowRight className="ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={28} strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
