import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills-services', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES & SKILLS', href: '#skills-services', id: 'skills-services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto max-w-5xl w-full rounded-full bg-[#181C20]/95 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/30 flex items-center justify-between transition-all duration-300">
        
        {/* Brand Monogram & Title */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-black text-xs text-[#A3E635] shadow-xs">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white group-hover:text-[#A3E635] transition-colors">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-[9px] text-slate-400 font-mono -mt-0.5 tracking-wider hidden xs:inline-block">
              PPC & AFFILIATE MARKETER
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links with Active Pill */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 tracking-wider ${
                  isActive
                    ? 'bg-[#A3E635] text-slate-950 font-bold shadow-xs'
                    : 'hover:text-white text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: "Let's Talk ↗" Pill Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-16 sm:top-20 inset-x-4 sm:inset-x-auto sm:w-80 sm:right-6 rounded-2xl bg-[#181C20]/95 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-[#A3E635] hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-white rounded-full"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
