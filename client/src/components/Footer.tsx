import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t-3 border-foreground py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-muted-foreground font-medium" data-testid="text-copyright">
              © 2025 Nishal Narechania
            </p>
            <a 
              href="https://linkedin.com/in/nishalnarechania" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              data-testid="link-linkedin-footer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nishal@nsquaredlabs.com" 
              className="text-muted-foreground hover:text-accent transition-colors"
              data-testid="link-email-footer"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground font-medium" data-testid="text-tech-stack">
            Built with Next.js, Tailwind CSS & AI-Assisted Development
          </div>
        </div>
      </div>
    </footer>
  );
}
