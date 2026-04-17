import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ExternalLink } from 'lucide-react';

const cinematicTransition = { ease: "circOut" as const, duration: 0.6 };

export default function Publications() {
  const { publications } = portfolioConfig;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-32 md:py-48 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Publications" />
        
        <div className="mt-16 w-full">
          {publications.map((pub, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ ...cinematicTransition, delay: index * 0.05 }}
              className="py-12 border-t border-white/10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Meta */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="text-sm font-sans font-light text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-500">
                    {pub.date}
                  </span>
                  <span className="text-sm uppercase tracking-widest font-sans text-accent">
                    {pub.conference}
                  </span>
                </div>
                
                {/* Details */}
                <div className="md:col-span-9 flex flex-col items-start">
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight max-w-4xl">
                    {pub.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-sans font-light mb-8">
                    {pub.authors}
                  </p>
                  
                  {pub.link && pub.link !== "#" && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors relative group/link py-2 flex items-center"
                    >
                      Read Paper
                      <ExternalLink size={14} className="ml-2 opacity-50" />
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/link:scale-x-100" />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
