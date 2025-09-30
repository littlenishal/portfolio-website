import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* What I Do Section */}
      <section className="py-20 bg-muted" data-testid="section-what-i-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-12" data-testid="text-what-i-do-title">
            WHAT I DO
          </h2>
          
          <div className="bg-background brutalist-border brutalist-shadow p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6" data-testid="text-service-title">
              0-to-1 Product Development
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl" data-testid="text-service-description">
              I take ideas from concept to shipped MVP in 4-8 weeks using AI-assisted vibecoding. Perfect for founders in fintech and proptech who need speed without sacrificing quality.
            </p>
            
            <div className="bg-secondary p-6 brutalist-border border-2">
              <p className="text-lg font-medium text-secondary-foreground" data-testid="text-availability">
                <span className="font-black">AVAILABILITY:</span> I'm currently employed full-time at Flex and take on 1-2 select side projects per year. If your project is a good fit, I respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20" data-testid="section-featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-12" data-testid="text-recent-work-title">
            RECENT WORK
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="Captains of Commerce"
              description="Nonprofit platform built entirely with AI-assisted development"
              outcome="Raised $15K+ for inaugural event, resulting in $5K community donation"
              tags={["Next.js", "Neon DB", "Vercel", "Replit Agent", "AI-Assisted"]}
              link="https://www.captainsofcommerce.org"
              isExternal={true}
              icon="heart"
              gradientFrom="accent"
              gradientTo="blue-700"
            />
            
            <ProjectCard
              title="Best Egg Flexible Rent"
              description="Credit-based rent payment solution scaled to 40K+ subscribers"
              outcome="$10MM ARR in under 1 year, successful exit"
              tags={["FinTech", "PropTech", "0-to-1"]}
              link="/work"
              icon="credit"
              gradientFrom="green-500"
              gradientTo="green-700"
            />
            
            <ProjectCard
              title="NSquared Labs Portfolio"
              description="This site - shipped in under 1 week with vibecoding"
              outcome="Meta demonstration of rapid AI-assisted product development"
              tags={["Next.js", "Vercel", "Meta"]}
              link="/work"
              icon="code"
              gradientFrom="purple-500"
              gradientTo="purple-700"
            />
          </div>
          
          <div className="text-center">
            <a 
              href="/work"
              className="bg-accent text-accent-foreground px-8 py-4 font-black text-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200 inline-block"
              data-testid="button-see-all-projects"
            >
              SEE ALL PROJECTS
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-cta-title">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-2xl mb-8 text-gray-300" data-testid="text-cta-subtitle">
            I'm currently available for consulting and fractional work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:nishal@nsquaredlabs.com" 
              className="bg-accent text-accent-foreground px-8 py-4 font-black text-xl brutalist-border border-white hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
              data-testid="button-get-in-touch"
            >
              GET IN TOUCH
            </a>
            <a 
              href="https://linkedin.com/in/nishalnarechania" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground px-8 py-4 font-black text-xl brutalist-border border-white hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
              data-testid="button-connect-linkedin"
            >
              CONNECT ON LINKEDIN
            </a>
          </div>
          
          <p className="text-gray-400 font-medium" data-testid="text-response-time">
            I'm selective about projects but respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
