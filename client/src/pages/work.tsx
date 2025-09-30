import { ExternalLink, HeartHandshake, CreditCard, Code } from "lucide-react";

export default function Work() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-20 bg-background" data-testid="section-work-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6" data-testid="text-work-title">
            WORK
          </h1>
          <p className="text-2xl text-muted-foreground font-medium" data-testid="text-work-subtitle">
            Products I've built and shipped.
          </p>
        </div>
      </section>

      {/* Detailed Projects */}
      <section className="py-20 bg-muted" data-testid="section-project-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Captains of Commerce Detailed */}
          <div className="bg-background brutalist-border brutalist-shadow mb-12 p-8 md:p-12" data-testid="project-captains-of-commerce">
            <div className="flex items-center mb-6">
              <h3 className="text-4xl font-black text-foreground mr-4" data-testid="text-captains-title">
                CAPTAINS OF COMMERCE
              </h3>
              <a 
                href="https://www.captainsofcommerce.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-blue-700 transition-colors"
                data-testid="link-captains-external"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Next.js</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Neon DB</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Vercel</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Replit Agent</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">AI-Assisted</span>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-captains-description">
                  Nonprofit platform working to build economic equity in underserved communities through collaborative, community-focused approaches. The site serves as both a marketing hub and event management system, with integrated ticketing through Zeffy (zero transaction fees).
                </p>
                
                <div className="bg-secondary p-6 brutalist-border border-2 mb-6">
                  <h4 className="text-xl font-black text-foreground mb-4">KEY METRICS</h4>
                  <ul className="space-y-2 text-secondary-foreground" data-testid="list-captains-metrics">
                    <li><span className="font-bold">Timeline:</span> Launched Summer 2025, built as side project</li>
                    <li><span className="font-bold">Approach:</span> 100% AI-assisted vibecoding</li>
                    <li><span className="font-bold">Impact:</span> $15K+ raised, $5K community donations</li>
                    <li><span className="font-bold">Role:</span> Co-Founder & Vice Chairman</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-accent brutalist-border p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <HeartHandshake className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-bold text-lg">LIVE PLATFORM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Egg Detailed */}
          <div className="bg-background brutalist-border brutalist-shadow mb-12 p-8 md:p-12" data-testid="project-best-egg">
            <h3 className="text-4xl font-black text-foreground mb-6" data-testid="text-best-egg-title">
              FLEXIBLE RENT BY BEST EGG
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">FinTech</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">PropTech</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Payments</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">0-to-1</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">B2C</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-black text-foreground mb-3">THE PROBLEM</h4>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-best-egg-problem">
                    Renters lacked flexible payment options for one of their largest monthly expenses. Traditional rent payment was rigid, offering no credit-building or payment flexibility options for the millions of Americans living paycheck to paycheck.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-black text-foreground mb-3">THE APPROACH</h4>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-best-egg-approach">
                    Led complete strategic pivot and end-to-end product rebuild from concept to market leader. Drove go-to-market strategy, cross-functional team coordination, and data-driven product iteration to achieve explosive growth.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-500 brutalist-border p-8">
                <h4 className="text-2xl font-black text-white mb-6">THE NUMBERS</h4>
                <div className="space-y-4 text-white" data-testid="section-best-egg-metrics">
                  <div className="bg-green-600 p-4 brutalist-border border-green-800">
                    <p className="text-3xl font-black">40,000+</p>
                    <p className="font-bold">Active Paying Subscribers</p>
                  </div>
                  <div className="bg-green-600 p-4 brutalist-border border-green-800">
                    <p className="text-3xl font-black">$10MM</p>
                    <p className="font-bold">Annual Run Rate in Year 1</p>
                  </div>
                  <div className="bg-green-600 p-4 brutalist-border border-green-800">
                    <p className="text-3xl font-black">$300MM+</p>
                    <p className="font-bold">Rent Payments Facilitated</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-secondary p-6 brutalist-border border-2">
              <p className="text-lg text-secondary-foreground" data-testid="text-best-egg-timeline">
                <span className="font-black">TIMELINE:</span> October 2022 - June 2025 (~2.5 years from pivot to exit) | 
                <span className="font-black">ROLE:</span> Senior Director, Head of Product
              </p>
            </div>
          </div>

          {/* Portfolio Site Detailed */}
          <div className="bg-background brutalist-border brutalist-shadow p-8 md:p-12" data-testid="project-nsquared-labs">
            <h3 className="text-4xl font-black text-foreground mb-6" data-testid="text-portfolio-title">
              NSQUARED LABS PORTFOLIO
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Next.js</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Vercel</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">AI-Assisted</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold">Meta Project</span>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-portfolio-description">
                  This website itself - a meta demonstration of the vibecoding approach. Built entirely using Claude and Replit Agent to showcase rapid AI-assisted product development.
                </p>
                
                <div className="bg-purple-100 p-6 brutalist-border border-2 mb-6">
                  <h4 className="text-xl font-black text-foreground mb-4">WHY THIS MATTERS</h4>
                  <p className="text-purple-800 font-medium" data-testid="text-portfolio-why-matters">
                    "Most consultants just talk about what they can do. I built this site using the exact process I'd use for your project - proving the approach works before you commit."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-500 brutalist-border p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Code className="h-24 w-24 mx-auto mb-4" />
                  <p className="font-bold text-lg">UNDER 1 WEEK</p>
                  <p className="text-purple-200">Concept to Live Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background" data-testid="section-work-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6" data-testid="text-work-cta-title">
            Want to work together?
          </h2>
          <a 
            href="mailto:nishal@nsquaredlabs.com"
            className="bg-accent text-accent-foreground px-8 py-4 font-black text-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200 inline-block"
            data-testid="button-book-call"
          >
            BOOK A CALL
          </a>
        </div>
      </section>
    </main>
  );
}
