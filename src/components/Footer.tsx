import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-Cyan-400 fill-white-400" size={16} />
            <span>By Alejandro Casquete</span>
          </div>

          <div className="text-gray-400 text-sm">
            <span>&copy; {new Date().getFullYear()} All rights reserved</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <button className="hover:text-cyan-400 transition-colors">Privacy</button>
            <button className="hover:text-cyan-400 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
