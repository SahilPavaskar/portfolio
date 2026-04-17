import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';

const cinematicTransition = { ease: "circOut" as const, duration: 0.6 };

export default function About() {
  const { about, education, certifications } = portfolioConfig;

  return (
    <section id="about" className="py-32 md:py-48 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Background" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Summary Section - Left */}
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={cinematicTransition}
              className="text-xl md:text-2xl text-foreground font-serif leading-relaxed mb-12"
            >
              {about.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ ...cinematicTransition, delay: 0.2 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-8">
                Certifications
              </h3>
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex flex-col items-start">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="group/cert inline-flex items-center font-sans font-light text-foreground text-lg mb-1 hover:text-muted-foreground transition-colors">
                        {cert.name}
                        <ArrowUpRight size={14} className="ml-2 opacity-50 group-hover/cert:opacity-100 group-hover/cert:translate-x-1 group-hover/cert:-translate-y-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <span className="font-sans font-light text-foreground text-lg mb-1">{cert.name}</span>
                    )}
                    <span className="text-xs font-sans text-muted-foreground uppercase tracking-widest">
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
              transition={{ ...cinematicTransition, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-8 lg:mt-0 mt-8"
            >
              Education
            </motion.h3>
            
            <div className="space-y-0">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20px" }}
                  transition={{ ...cinematicTransition, delay: 0.2 + (index * 0.05) }}
                  className="py-10 border-t border-white/10 first:border-t-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4">
                      <span className="text-sm font-sans font-light text-muted-foreground">{edu.date}</span>
                    </div>
                    <div className="sm:col-span-8">
                      <h4 className="text-2xl font-serif text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground font-sans font-light mb-6">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
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
