import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Über uns', path: '/about' },
  { name: 'Projekte', path: '/projects' },
  { name: 'Kontakt', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            HEINZE<span className="text-gradient">AT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-[var(--color-primary)] ${
                  location.pathname === link.path ? 'text-[var(--color-text-main)] font-medium' : 'text-[var(--color-text-main)]/60'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mt-1"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text-main)]/60 hover:text-[var(--color-primary)] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-nav border-t border-white/5"
        >
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-[var(--color-primary)] ${
                  location.pathname === link.path ? 'text-[var(--color-text-main)] font-medium' : 'text-[var(--color-text-main)]/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
