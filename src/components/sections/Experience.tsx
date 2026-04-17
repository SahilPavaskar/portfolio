import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-32 md:py-48 relative border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Experience" />
        
        <div className="mt-16 w-full space-y-8">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="brutalist-card p-8 md:p-12 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                
                {/* Meta */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="text-sm font-mono font-bold text-black border-2 border-black px-2 py-1 bg-white w-fit mb-4">
                    {job.date}
                  </span>
                  <span className="text-xl font-mono font-bold text-black uppercase tracking-tight">
                    {job.company}
                  </span>
                </div>
                
                {/* Details */}
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl font-serif text-black mb-8 uppercase">
                    {job.role}
                  </h3>
                  
                  <ul className="space-y-6">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-base text-black font-mono font-medium leading-relaxed flex items-start max-w-3xl">
                        <span className="mr-6 mt-2 block w-2 h-2 bg-black shrink-0" />
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
