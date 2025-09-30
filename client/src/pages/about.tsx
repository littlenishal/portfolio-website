import headshotImg from "@assets/headshot_1759242359979.png";

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8" data-testid="text-about-title">
                HI, I'M NISHAL
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p data-testid="text-story-para-1">
                  I started my career at Deloitte, where I spent nearly 8 years as a technology strategy consultant. I worked with Fortune 500 companies and government agencies, learning how to break down complex problems, navigate bureaucracy, and deliver under pressure. But I wanted to do more than make recommendations—I wanted to build.
                </p>
                
                <p data-testid="text-story-para-2">
                  I transitioned into product management, focusing on 0-to-1 work in fintech and proptech where strategic thinking meets hands-on execution. At Avant, I led products that originated over 500,000 loans and incubated what later became Amount, a successful fintech spinout. At Territory Foods, I built a $30MM GMV meal subscription marketplace that made the a16z Marketplace 100 list twice.
                </p>
                
                <p data-testid="text-story-para-3">
                  In 2020, I founded NSquared Labs as a side project—a boutique consultancy where I help startups ship products fast. During the pandemic, I led a team that deployed a PPP loan platform originating over $400MM in emergency funding for small businesses.
                </p>
                
                <p data-testid="text-story-para-4">
                  Now, I'm combining my product leadership experience with AI-assisted development (vibecoding) to compress typical build timelines from months to weeks. I'm currently Senior Director of Product at Flex, and I take on 1-2 select side projects per year where I can make meaningful impact.
                </p>
                
                <p data-testid="text-story-para-5">
                  I also co-founded Captains of Commerce, a nonprofit platform I built entirely with AI assistance to create economic equity in underserved communities. We raised over $15K for our inaugural event.
                </p>
                
                <p className="font-medium text-foreground" data-testid="text-story-para-6">
                  When I'm not building products, I'm making Neapolitan-style pizza for my wife and two young daughters.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="w-full max-w-md brutalist-border brutalist-shadow overflow-hidden bg-muted" data-testid="img-about-photo">
                <img 
                  src={headshotImg} 
                  alt="Nishal Narechania - Product Leader" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Experience Highlights */}
              <div className="bg-background brutalist-border brutalist-shadow p-6" data-testid="section-experience-highlights">
                <h3 className="text-2xl font-black text-foreground mb-6">EXPERIENCE HIGHLIGHTS</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4" data-testid="experience-deloitte">
                    <h4 className="font-black text-foreground">Technology Strategy @ Deloitte</h4>
                    <p className="text-sm text-muted-foreground">2006-2013</p>
                    <p className="text-sm text-secondary-foreground">Led enterprise architecture and technology strategy for Fortune 500 and government clients</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4" data-testid="experience-0-to-1">
                    <h4 className="font-black text-foreground">0-to-1 Product Leadership</h4>
                    <p className="text-sm text-muted-foreground">2014-2022</p>
                    <p className="text-sm text-secondary-foreground">Built and scaled products at Avant (500K+ loans), Territory Foods ($30MM GMV), and Upside ($10MM travel value in 90 days)</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4" data-testid="experience-best-egg">
                    <h4 className="font-black text-foreground">Best Egg: Flexible Rent</h4>
                    <p className="text-sm text-muted-foreground">2022-2025</p>
                    <p className="text-sm text-secondary-foreground">Took product from 0 to 40K subscribers, $10MM ARR, and successful exit</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4" data-testid="experience-current">
                    <h4 className="font-black text-foreground">Current: Senior Director @ Flex + Side Projects</h4>
                    <p className="text-sm text-muted-foreground">2025-Present</p>
                    <p className="text-sm text-secondary-foreground">Leading product at Flex while building select 0-to-1 products using AI-assisted development</p>
                  </div>
                </div>
              </div>
              
              {/* Expertise Areas */}
              <div className="bg-secondary brutalist-border p-6" data-testid="section-expertise">
                <h3 className="text-2xl font-black text-foreground mb-6">EXPERTISE AREAS</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-fintech">FinTech & PropTech Product Development</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-0-to-1">0-to-1 Product Leadership</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-ai">AI-Assisted Development</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-payments">Payments & Financial Services</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-strategy">Product Strategy & Roadmapping</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-leadership">Cross-Functional Leadership</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-mvp">Rapid MVP Development</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold" data-testid="expertise-marketplace">Marketplace & Platform Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6" data-testid="text-about-cta-title">
            Let's work together
          </h2>
          <a 
            href="mailto:nishal@nsquaredlabs.com"
            className="bg-accent text-accent-foreground px-8 py-4 font-black text-xl brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200 inline-block"
            data-testid="button-contact-about"
          >
            CONTACT ME
          </a>
        </div>
      </section>
    </main>
  );
}
