import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const cinematicTransition = { ease: "circOut" as const, duration: 0.6 };

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-32 md:py-48 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Selected Work" />
        
        <div className="mt-16 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ ...cinematicTransition, delay: index * 0.05 }}
              className="py-12 md:py-16 border-t border-white/10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Meta */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="text-sm font-sans font-light text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-500">
                    {project.date}
                  </span>
                  <span className="text-sm font-sans font-light text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Details */}
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight max-w-4xl">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground font-sans font-light mb-8 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-6 mb-10">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-base text-muted-foreground font-sans font-light flex items-start max-w-3xl">
                        <span className="mr-6 mt-3 block w-6 h-[1px] bg-white/20 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-xs uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors group/link py-2"
                    >
                      <Github size={16} className="mr-3" />
                      View on GitHub
                      <ArrowUpRight size={14} className="ml-2 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
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
