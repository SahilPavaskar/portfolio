import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const cinematicTransition = { ease: "circOut" as const, duration: 0.6 };

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-20 md:mb-32 flex flex-col">
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20px" }}
        transition={cinematicTransition}
        className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20px" }}
          transition={{ ...cinematicTransition, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground font-sans font-light tracking-wide max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
