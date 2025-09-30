# Personal Website Build Instructions for Replit Agent

## Project Overview
Build a modern, high-converting personal website for a product consultant specializing in fintech and proptech. The site should position the owner as someone who ships fast using AI-assisted development, with a background in strategy consulting (Deloitte) and 0-to-1 product management.

## Target Audience
- Startup founders and executives looking for fractional PM/product consulting
- Hiring managers at fintech/proptech companies
- VCs and investors in the ecosystem

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (set up automatic deployment)
- **Font:** Inter or similar modern sans-serif
- **Icons:** Lucide React or Heroicons

## Design Principles
1. **Modern & Bold:** Use neo-brutalist or brutalist-minimal aesthetic (high contrast, bold typography, unconventional but readable layouts)
2. **Fast Loading:** Optimize all assets, minimal JavaScript
3. **Mobile-First:** Perfect mobile experience, then scale up
4. **High Contrast:** Use stark black/white with one bold accent color (suggest: electric blue #0066FF or neon green #00FF85)
5. **Scannable:** Large headings, short paragraphs, clear CTAs
6. **No Fluff:** Every element serves a purpose

## Site Structure & Pages

### Page 1: Home (/)
**Purpose:** Immediately communicate value proposition and credibility

**Layout:**
```
[Navigation: Logo/Name - Work - About - Contact]

**Hero:**
- **Heading (72px mobile, 96px desktop):** "Product leader who ships. Fast."
- **Subheading (20px mobile, 24px desktop):** "Senior Director of Product at Flex. I build 0-to-1 products on the side using AI-assisted development. Available for select projects in fintech and proptech."
- **CTA Buttons (prominent, high contrast):**
  - Primary: "Let's Talk" (link to mailto:nishal@nsquaredlabs.com OR Google Calendar link when provided)
  - Secondary: "See My Work" (scroll to projects or link to /work)
- **Social Links:** LinkedIn icon (link to https://linkedin.com/in/nishalnarechania)

[WHAT I DO SECTION]
- Heading: "What I Do"
- Single focused offering (not three columns):

**"0-to-1 Product Development"**
Brief description: "I take ideas from concept to shipped MVP in 4-8 weeks using AI-assisted vibecoding. Perfect for founders in fintech and proptech who need speed without sacrificing quality."

**Availability note (smaller text below):**
"I'm currently employed full-time at Flex and take on 1-2 select side projects per year. If your project is a good fit, I respond within 24 hours."

[FEATURED PROJECTS PREVIEW]
- Heading: "Recent Work"
- Show 3 project cards with:
  
**Project 1: Captains of Commerce**
- One-line: "Nonprofit platform built entirely with AI-assisted development"
- Key outcome: "Raised $15K+ for inaugural event, resulting in $5K community donation"
- "View Project" link to /work page

**Project 2: Best Egg Flexible Rent**
- One-line: "Credit-based rent payment solution scaled to 40K+ subscribers"
- Key outcome: "$10MM ARR in under 1 year, successful exit"
- "View Project" link to /work page

**Project 3: NSquared Labs Portfolio**
- One-line: "This site - shipped in under 1 week with vibecoding"
- Key outcome: "Meta demonstration of rapid AI-assisted product development"
- "View Project" link to /work page

- CTA: "See All Projects" button linking to /work

[CLOSING CTA SECTION]
- Heading: "Let's build something."
- Subheading: "I'm currently available for consulting and fractional work."
- Large CTA button: "Get in Touch"
- Email link as alternative

[FOOTER]
- Copyright
- Social links
- Built with [tech stack] badge
```

### Page 2: Work (/work)
**Purpose:** Showcase projects with depth, prove you ship

**Layout:**
```
[Navigation - same as home]

[PAGE HEADER]
- Heading: "Work"
- Subheading: "Products I've built and shipped."

[PROJECT 1: Captains of Commerce]
- Project name: "Captains of Commerce"
- Live link: https://www.captainsofcommerce.org
- Tags: Next.js, Neon DB, Vercel, Replit Agent, AI-Assisted Development
- Description: 
  "Nonprofit platform working to build economic equity in underserved communities through collaborative, community-focused approaches. The site serves as both a marketing hub and event management system, with integrated ticketing through Zeffy (zero transaction fees)."
  
- Key details:
  - **Timeline:** Launched Summer 2025 (June/July), built entirely as a side project
  - **Approach:** 100% built using Replit Agent and AI-assisted vibecoding - zero traditional coding required
  - **Architecture:** Next.js frontend, Neon serverless Postgres DB, deployed on Vercel, integrated with Stripe via Zeffy for zero-fee donations
  - **Impact:** Raised $15K+ for inaugural event (October 2025), generating $5K in community donations
  - **Role:** Co-Founder & Vice Chairman
  - **Why it matters:** Demonstrates the power of vibecoding - a complete nonprofit platform shipped as a side project in weeks, not months
  
- Screenshot: [Live site screenshot or placeholder]
- CTA: "Visit Live Site" linking to https://www.captainsofcommerce.org

[PROJECT 2: Best Egg Flexible Rent]
- Project name: "Flexible Rent by Best Egg"
- Tags: FinTech, PropTech, Payments, 0-to-1 Product, B2C
- Problem: "Renters lacked flexible payment options for one of their largest monthly expenses. Traditional rent payment was rigid, offering no credit-building or payment flexibility options for the millions of Americans living paycheck to paycheck."

- Approach: "Led complete strategic pivot and end-to-end product rebuild from concept to market leader. Drove go-to-market strategy, cross-functional team coordination, and data-driven product iteration to achieve explosive growth."

- Outcome - The Numbers:
  - **0 to 40,000+ active paying subscribers** in 2 years
  - **$10MM annual run rate** achieved in under 1 year
  - **$300MM+ in rent payments** facilitated
  - **Market leadership:** Established as the most widely available credit-based rent payment solution
  - **Successful exit:** Built profitable business line that resulted in acquisition
  
- Timeline: "October 2022 - June 2025 (~2.5 years from pivot to exit)"
- Role: "Senior Director, Head of Product"
- Key responsibilities:
  - Led strategic pivot and complete product reimagining
  - Directed cross-functional teams through all stages of development
  - Implemented data-driven decision-making processes
  - Collaborated with C-suite to align product and business strategy
  
- Screenshot: [Product screenshot placeholder]

[PROJECT 3: NSquared Labs Portfolio Site]
- Project name: "NSquared Labs Portfolio"
- Tags: Next.js, Vercel, AI-Assisted Development, Meta Project
- Description: "This website itself - a meta demonstration of the vibecoding approach. Built entirely using Claude and Replit Agent to showcase rapid AI-assisted product development."
  
- Key details:
  - **Timeline:** Under 1 week from concept to live deployment
  - **Approach:** Detailed specifications fed to Replit Agent, with iterative refinement through AI collaboration
  - **Tech Stack:** Next.js, Tailwind CSS, deployed on Vercel
  - **Outcome:** Modern, performant portfolio site demonstrating what's possible when you combine product thinking with AI-assisted development
  
- Why this matters: "Most consultants just talk about what they can do. I built this site using the exact process I'd use for your project - proving the approach works before you commit."
  
- Screenshot: [Site screenshot or placeholder]

[CTA SECTION]
- "Want to work together?"
- "Book a Call" button
```

### Page 3: About (/about)
**Purpose:** Tell your story, build trust, show personality

**Layout:**
```
[Navigation - same as home]

[HERO]
- Professional photo (placeholder for now - 400x400px circle or square)
- Heading: "Hi, I'm [Your Name]"

[STORY SECTION]
Write the narrative in first person, conversational but professional:

"I started my career at Deloitte, where I spent nearly 8 years as a technology strategy consultant. I worked with Fortune 500 companies and government agencies, learning how to break down complex problems, navigate bureaucracy, and deliver under pressure. But I wanted to do more than make recommendations—I wanted to build.

I transitioned into product management, focusing on 0-to-1 work in fintech and proptech where strategic thinking meets hands-on execution. At Avant, I led products that originated over 500,000 loans and incubated what later became Amount, a successful fintech spinout. At Territory Foods, I built a $30MM GMV meal subscription marketplace that made the a16z Marketplace 100 list twice. At Best Egg, I took Flexible Rent from concept to 40,000 paying subscribers and a $10MM run rate, culminating in a successful exit.

In 2020, I founded NSquared Labs as a side project—a boutique consultancy where I help startups ship products fast. During the pandemic, I led a team that deployed a PPP loan platform originating over $400MM in emergency funding for small businesses.

Now, I'm combining my product leadership experience with AI-assisted development (vibecoding) to compress typical build timelines from months to weeks. I'm currently Senior Director of Product at Flex, and I take on 1-2 select side projects per year where I can make meaningful impact.

I also co-founded Captains of Commerce, a nonprofit platform I built entirely with AI assistance to create economic equity in underserved communities. We raised over $15K for our inaugural event.

When I'm not building products, I'm making Neapolitan-style pizza for my wife and two young daughters."

[EXPERIENCE HIGHLIGHTS]
Four key points (not full resume):
- **"Technology Strategy @ Deloitte" (2006-2013)** - Led enterprise architecture and technology strategy for Fortune 500 and government clients
- **"0-to-1 Product Leadership" (2014-2022)** - Built and scaled products at Avant (500K+ loans), Territory Foods ($30MM GMV), and Upside ($10MM travel value in 90 days)
- **"Best Egg: Flexible Rent" (2022-2025)** - Took product from 0 to 40K subscribers, $10MM ARR, and successful exit
- **"Current: Senior Director @ Flex + Side Projects"** - Leading product at Flex while building select 0-to-1 products using AI-assisted development

[EXPERTISE AREAS]
Bullet list or tags:
- FinTech & PropTech Product Development
- 0-to-1 Product Leadership
- AI-Assisted Development (Vibecoding)
- Payments & Financial Services
- Product Strategy & Roadmapping
- Cross-Functional Team Leadership
- Rapid MVP Development
- Marketplace & Platform Products

[CTA]
- "Let's work together"
- Contact button
```

### Page 4: Contact (/contact or just use CTAs throughout)
**Recommendation: Use CTAs throughout site rather than dedicated contact page**

Ensure every page has clear CTAs to:
- **Primary CTA:** "Let's Talk" button → links to either:
  - mailto:nishal@nsquaredlabs.com OR
  - Google Calendar booking link (when provided by user)
- **Footer links:**
  - Email: nishal@nsquaredlabs.com
  - LinkedIn: https://linkedin.com/in/nishalnarechania
  
**Response expectation (include near contact CTAs):**
"I'm selective about projects but respond to all inquiries within 24 hours."

**Alternative: If user wants dedicated contact page:**
- Heading: "Let's Work Together"
- Subheading: "I take on 1-2 select projects per year. If you're building something in fintech or proptech and need to ship fast, let's talk."
- Google Calendar embed OR simple mailto button
- Email: nishal@nsquaredlabs.com
- LinkedIn link
- Note: "Currently employed full-time at Flex. Available for evening/weekend project work."

## Navigation
- Fixed/sticky header on all pages
- Logo/Name (links to home)
- Links: Work, About, Contact (or just "Let's Talk" CTA)
- Mobile: Hamburger menu
- Keep it minimal and clean

## Component Specifications

### Button Styles
```
Primary CTA:
- Large padding (px-8 py-4)
- Bold text
- High contrast (e.g., black bg, white text, or accent color)
- Hover state: Slight transform or color shift
- Clear focus states for accessibility

Secondary CTA:
- Similar size but outlined/ghost style
- Border matches accent color
```

### Project Card Component
```
Structure:
- Card container with subtle border or shadow
- Project image/screenshot (16:9 ratio placeholder)
- Project name (24px, bold)
- Tags (small pills with accent color)
- Description (16px, 2-3 lines max)
- Metrics/outcome (bold, highlighted)
- "View Details" link or button
- Hover state: Slight lift effect
```

### Typography Scale
```
- Display (Hero): 72-96px, bold
- H1: 48-64px, bold
- H2: 36-48px, bold  
- H3: 24-32px, semi-bold
- Body: 16-18px, regular
- Small: 14px, regular

Line heights: 1.2 for headings, 1.6 for body
```

## Actual Content - Use These Exactly:

- **Name:** Nishal Narechania
- **Email:** nishal@nsquaredlabs.com
- **LinkedIn:** https://linkedin.com/in/nishalnarechania
- **Calendar Link:** [Google Calendar booking link - to be added by user]
- **Current Role:** Senior Director of Product Management at Flex
- **Location:** Arlington, Virginia

## Responsive Breakpoints
- Mobile: < 640px (stack everything)
- Tablet: 640px - 1024px (2-column layouts where appropriate)
- Desktop: > 1024px (full layouts, max-width 1280px)

## Performance Requirements
- Lighthouse score target: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Optimize all images (use Next.js Image component)
- Lazy load below-the-fold content
- Minimal JavaScript (avoid heavy libraries)

## SEO Requirements
Add to all pages:
- Proper meta tags (title, description)
- Open Graph tags for social sharing
- Semantic HTML (proper heading hierarchy)
- Alt text for all images
- Sitemap.xml
- robots.txt

**Meta descriptions:**
- Home: "Product consultant specializing in fintech & proptech. Former Deloitte consultant turned 0-to-1 PM who ships fast using AI-assisted development."
- Work: "Projects and products built by [Your Name] - from concept to shipped product in weeks."
- About: "Learn about [Your Name]'s journey from strategy consulting to product management and fractional consulting."

## Accessibility Requirements
- WCAG 2.1 AA compliance minimum
- Proper color contrast (test with WebAIM)
- Keyboard navigation for all interactive elements
- Screen reader friendly (semantic HTML, ARIA labels where needed)
- Focus indicators on all interactive elements

## Analytics Setup
- Add Google Analytics 4 (placeholder ID for now: G-XXXXXXXXXX)
- Track key events:
  - CTA button clicks (Book a Call, Contact)
  - Project card clicks
  - Social link clicks
  - Page scroll depth

## Deployment Instructions
1. Set up Vercel project connected to GitHub repo
2. Configure custom domain (once purchased): www.yourname.com
3. Enable automatic deployments on main branch push
4. Set up preview deployments for PRs
5. Configure environment variables if needed

## File Structure
```
/app
  /layout.js (root layout with nav and footer)
  /page.js (home page)
  /work
    /page.js
  /about  
    /page.js
  /contact (optional)
    /page.js
/components
  /Navigation.js
  /Footer.js
  /ProjectCard.js
  /Button.js
  /Hero.js
/public
  /images (for screenshots, logos, etc.)
/styles
  /globals.css (Tailwind imports and custom styles)
```

## Color Palette Suggestions
**Option 1: Bold Minimal**
- Background: #FFFFFF (white)
- Text: #000000 (black)
- Accent: #0066FF (electric blue)
- Secondary: #F5F5F5 (light gray for sections)

**Option 2: Dark Mode First**
- Background: #0A0A0A (near black)
- Text: #FFFFFF (white)
- Accent: #00FF85 (neon green)
- Secondary: #1A1A1A (dark gray for cards)

**Option 3: Brutalist**
- Background: #FFFEF9 (off-white/cream)
- Text: #000000 (black)
- Accent: #FF3366 (hot pink/red)
- Borders: #000000 (thick black borders everywhere)

Choose one and implement consistently. I recommend Option 1 for broadest appeal to executives.

## Post-Launch Checklist
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test all CTAs and links work
- [ ] Verify forms/Calendly embeds work
- [ ] Run Lighthouse audit
- [ ] Test accessibility with screen reader
- [ ] Check SEO meta tags in browser
- [ ] Verify analytics tracking
- [ ] Test load time on slow 3G
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

## Phase 2 Enhancements (Do NOT build these now)
Save for future iterations after v1 ships:
- Blog/writing section
- /now page
- Testimonials section
- Case study deep-dives (separate pages per project)
- Newsletter signup
- Dark mode toggle
- Interactive elements/animations
- More projects as they're completed

## Key Principles for Replit Agent
1. **Ship v1 fast** - Don't over-engineer, get it live
2. **Make it work, then make it pretty** - Functionality first
3. **Use placeholders liberally** - Better to ship with [TBD] than wait for perfect content
4. **Mobile-first always** - Test mobile layout first
5. **High contrast wins** - Make it bold and readable
6. **Every element earns its place** - Cut ruthlessly
7. **CTAs everywhere** - Make it easy to contact

## Questions to Flag for Human Review
- Color scheme preference (present 3 options)
- Actual content for project descriptions
- Professional photo upload
- Real social media URLs
- Calendly link
- Domain name preference
- Any specific examples or metrics to highlight

## Success Criteria
This build is successful when:
- ✅ Site loads in < 2 seconds
- ✅ Looks professional on mobile and desktop  
- ✅ Clear value proposition within 3 seconds of landing
- ✅ All CTAs are functional (even if placeholder links)
- ✅ No broken links or console errors
- ✅ Can be deployed to production immediately
- ✅ Takes < 1 week from start to live

---

**Build this. Ship it. Iterate later.**