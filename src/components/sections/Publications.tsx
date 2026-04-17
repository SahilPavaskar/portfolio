import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const { publications } = portfolioConfig;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-32 md:py-48 relative border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Publications" />
        
        <div className="mt-16 w-full space-y-8">
          {publications.map((pub, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="brutalist-card p-8 md:p-12 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Meta */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="text-sm font-mono font-bold text-black border-2 border-black px-2 py-1 bg-white w-fit mb-4">
                    {pub.date}
                  </span>
                  <span className="text-sm uppercase tracking-widest font-mono font-bold text-black border-l-4 border-black pl-3">
                    {pub.conference}
                  </span>
                </div>
                
                {/* Details */}
                <div className="md:col-span-9 flex flex-col items-start">
                  <h3 className="text-3xl md:text-4xl font-serif text-black mb-6 leading-tight max-w-4xl uppercase">
                    {pub.title}
                  </h3>
                  
                  <p className="text-lg text-black font-mono font-medium mb-8">
                    {pub.authors}
                  </p>
                  
                  {pub.link && pub.link !== "#" && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-xs uppercase tracking-widest font-mono font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors group/link"
                    >
                      Read Paper
                      <ExternalLink size={14} className="ml-2 opacity-100" />
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
