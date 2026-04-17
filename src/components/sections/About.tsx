import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const { about, education, certifications } = portfolioConfig;

  return (
    <section id="about" className="py-32 md:py-48 relative border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Background" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Summary Section - Left */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-black font-serif leading-relaxed mb-12"
            >
              {about.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="brutalist-card p-8"
            >
              <h3 className="text-xs uppercase tracking-widest text-black font-mono font-bold mb-8">
                Certifications
              </h3>
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex flex-col items-start border-b-2 border-black pb-4 last:border-0 last:pb-0">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="group/cert inline-flex items-center font-mono font-bold text-black text-sm sm:text-base mb-1 hover:bg-black hover:text-white transition-colors px-1 -ml-1">
                        {cert.name}
                        <ArrowUpRight size={16} className="ml-2 group-hover/cert:translate-x-1 group-hover/cert:-translate-y-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="font-mono font-bold text-black text-sm sm:text-base mb-1">{cert.name}</span>
                    )}
                    <span className="text-xs font-mono text-black uppercase tracking-widest mt-1">
                      {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education Section - Right */}
          <div className="lg:col-span-7">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.4 }}
              className="text-xs uppercase tracking-widest text-black font-mono font-bold mb-8 lg:mt-0 mt-8"
            >
              Education
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                  className="brutalist-card p-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4">
                      <span className="text-sm font-mono font-bold text-black border-2 border-black px-2 py-1 bg-white">{edu.date}</span>
                    </div>
                    <div className="sm:col-span-8">
                      <h4 className="text-2xl font-serif text-black mb-2 uppercase">{edu.degree}</h4>
                      <p className="text-black font-mono font-bold text-sm mb-6 uppercase tracking-tight">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-3 gap-y-3">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="brutalist-badge">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
