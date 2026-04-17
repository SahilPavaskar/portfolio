import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';

const cinematicTransition = { ease: "circOut" as const, duration: 0.6 };

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-32 md:py-48 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Experience" />
        
        <div className="mt-16 w-full">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ ...cinematicTransition, delay: index * 0.05 }}
              className="py-12 md:py-16 border-t border-white/10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                
                {/* Meta */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="text-sm font-sans font-light text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-500">
                    {job.date}
                  </span>
                  <span className="text-xl font-serif text-foreground">
                    {job.company}
                  </span>
                </div>
                
                {/* Details */}
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
                    {job.role}
                  </h3>
                  
                  <ul className="space-y-6">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-base text-muted-foreground font-sans font-light leading-relaxed flex items-start max-w-3xl">
                        <span className="mr-6 mt-3 block w-6 h-[1px] bg-white/20 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
