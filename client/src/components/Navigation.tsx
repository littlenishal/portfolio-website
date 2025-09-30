import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-fixed brutalist-border border-t-0 border-l-0 border-r-0" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" data-testid="link-home" className="text-2xl font-black text-foreground hover:text-accent transition-colors duration-200">
              NISHAL NARECHANIA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/work" data-testid="link-work" className="text-foreground hover:text-accent font-bold text-lg transition-colors duration-200">
                WORK
              </Link>
              <Link href="/about" data-testid="link-about" className="text-foreground hover:text-accent font-bold text-lg transition-colors duration-200">
                ABOUT
              </Link>
              <a 
                href="mailto:nishal@nsquaredlabs.com" 
                className="bg-accent text-accent-foreground px-6 py-2 font-black text-lg brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200"
                data-testid="button-contact"
              >
                LET'S TALK
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-foreground hover:text-accent" 
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background brutalist-border border-t-3" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/work" data-testid="link-work-mobile" className="block px-3 py-2 text-lg font-bold text-foreground hover:text-accent" onClick={closeMobileMenu}>
              WORK
            </Link>
            <Link href="/about" data-testid="link-about-mobile" className="block px-3 py-2 text-lg font-bold text-foreground hover:text-accent" onClick={closeMobileMenu}>
              ABOUT
            </Link>
            <a 
              href="mailto:nishal@nsquaredlabs.com" 
              className="block px-3 py-2 text-lg font-bold text-accent"
              onClick={closeMobileMenu}
              data-testid="button-contact-mobile"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
