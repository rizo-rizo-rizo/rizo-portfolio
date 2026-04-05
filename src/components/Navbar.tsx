import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full h-20 bg-[#111316]/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 z-50">
      <Link to="/" className="font-headline italic text-2xl text-[#e2e2e6] tracking-tight z-50" onClick={() => setIsOpen(false)}>
        RIZO LAMARIS
      </Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-12 items-center">
        <Link to="/" className={`font-headline text-lg tracking-tight transition-colors duration-300 flicker-hover ${isActive('/') ? 'text-[#2ddbde] font-bold' : 'text-[#e2e2e6]/70 hover:text-[#2ddbde]'}`}>
          Home
        </Link>
        <Link to="/work" className={`font-headline text-lg tracking-tight transition-colors duration-300 flicker-hover ${isActive('/work') ? 'text-[#2ddbde] font-bold' : 'text-[#e2e2e6]/70 hover:text-[#2ddbde]'}`}>
          Work
        </Link>
        <a href="#" className="text-[#e2e2e6]/70 font-headline text-lg tracking-tight hover:text-[#2ddbde] transition-colors duration-300 flicker-hover">
          Process
        </a>
        <a href="#" className="text-[#e2e2e6]/70 font-headline text-lg tracking-tight hover:text-[#2ddbde] transition-colors duration-300 flicker-hover">
          Contact
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-6 md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#e2e2e6]/70 hover:text-[#2ddbde] transition-colors">
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Desktop Grid Icon (Decorative) */}
      <div className="hidden md:flex items-center gap-6">
        <span className="material-symbols-outlined text-[#e2e2e6]/70 cursor-pointer hover:text-[#2ddbde] transition-colors">
          grid_view
        </span>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#111316]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 z-40 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className={`font-headline text-4xl tracking-tight transition-colors duration-300 ${isActive('/') ? 'text-[#2ddbde] italic' : 'text-[#e2e2e6] hover:text-[#2ddbde]'}`}>
            Home
          </Link>
          <Link to="/work" onClick={() => setIsOpen(false)} className={`font-headline text-4xl tracking-tight transition-colors duration-300 ${isActive('/work') ? 'text-[#2ddbde] italic' : 'text-[#e2e2e6] hover:text-[#2ddbde]'}`}>
            Work
          </Link>
          <a href="#" onClick={() => setIsOpen(false)} className="text-[#e2e2e6] font-headline text-4xl tracking-tight hover:text-[#2ddbde] transition-colors duration-300">
            Process
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-[#e2e2e6] font-headline text-4xl tracking-tight hover:text-[#2ddbde] transition-colors duration-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
