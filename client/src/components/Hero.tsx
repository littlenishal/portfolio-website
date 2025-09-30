import { User } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="hero-text font-black text-foreground mb-6" data-testid="text-hero-title">
              Product leader who ships. 
              <span className="text-accent">Fast.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Senior Director of Product at Flex. I build 0-to-1 products on the side using AI-assisted development. Available for select projects in fintech and proptech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="mailto:nishal@nsquaredlabs.com" 
                className="bg-foreground text-background px-8 py-4 font-black text-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200 text-center"
                data-testid="button-lets-talk"
              >
                LET'S TALK
              </a>
              <a 
                href="/work" 
                className="bg-background text-foreground px-8 py-4 font-black text-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200 text-center"
                data-testid="button-see-work"
              >
                SEE MY WORK
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/nishalnarechania" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-200"
                data-testid="link-linkedin-hero"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            {/* Professional headshot placeholder - modern geometric shape */}
            <div className="w-96 h-96 bg-accent brutalist-border brutalist-shadow relative" data-testid="img-headshot">
              <div className="absolute inset-4 bg-muted flex items-center justify-center">
                <User className="h-24 w-24 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
