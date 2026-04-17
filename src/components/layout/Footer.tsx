import { portfolioConfig } from '../../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <div className="mb-8 md:mb-0">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
              &copy; {currentYear} {portfolioConfig.personal.name}
            </p>
          </div>
          
          <div className="flex space-x-10">
            <a 
              href={portfolioConfig.personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors relative group py-2"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
            <a 
              href={portfolioConfig.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors relative group py-2"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
            <a 
              href={portfolioConfig.personal.resumeDownloadUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-sans text-foreground hover:text-muted-foreground transition-colors relative group py-2"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
