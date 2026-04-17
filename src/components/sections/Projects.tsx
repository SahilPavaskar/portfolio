import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioConfig } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-32 md:py-48 relative border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeading title="Selected Work" />
        
        <div className="mt-16 w-full space-y-8">
          {projects.map((project, index) => (
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
                    {project.date}
                  </span>

                </div>
                
                {/* Details */}
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl font-serif text-black mb-6 leading-tight max-w-4xl uppercase">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-black font-mono font-medium mb-8 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-6 mb-10">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-base text-black font-mono font-medium flex items-start max-w-3xl">
                        <span className="mr-6 mt-2 block w-2 h-2 bg-black shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-xs uppercase tracking-widest font-mono font-bold text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors group/link"
                    >
                      <Github size={16} className="mr-3" />
                      View on GitHub
                      <ArrowUpRight size={14} className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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
