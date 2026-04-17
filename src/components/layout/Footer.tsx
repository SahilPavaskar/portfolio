import { portfolioConfig } from '../../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-12 relative border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <div className="mb-8 md:mb-0">
            <p className="text-xs uppercase tracking-widest text-black font-mono font-bold">
              &copy; {currentYear} {portfolioConfig.personal.name}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={portfolioConfig.personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-mono font-bold text-black border-2 border-transparent hover:border-black px-3 py-1 hover:bg-black hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href={portfolioConfig.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-mono font-bold text-black border-2 border-transparent hover:border-black px-3 py-1 hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={portfolioConfig.personal.resumeDownloadUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs uppercase tracking-widest font-mono font-bold text-black border-2 border-transparent hover:border-black px-3 py-1 hover:bg-black hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
