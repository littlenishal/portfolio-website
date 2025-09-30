import { ExternalLink, HeartHandshake, CreditCard, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  link?: string;
  isExternal?: boolean;
  icon?: "heart" | "credit" | "code";
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ProjectCard({
  title,
  description,
  outcome,
  tags,
  link,
  isExternal = false,
  icon = "code",
  gradientFrom = "purple-500",
  gradientTo = "purple-700"
}: ProjectCardProps) {
  const iconMap = {
    heart: HeartHandshake,
    credit: CreditCard,
    code: Code
  };

  const IconComponent = iconMap[icon];

  const handleClick = () => {
    if (link) {
      if (isExternal) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <div 
      className="bg-background brutalist-border brutalist-shadow brutalist-shadow-hover transition-all duration-200"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Project image/icon placeholder */}
      <div className={`h-48 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent className="h-16 w-16 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-black text-foreground mb-3" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold"
              data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-4" data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        
        <p className="text-foreground font-bold mb-4" data-testid={`text-outcome-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {outcome}
        </p>
        
        {link && (
          <button 
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-black brutalist-border hover:translate-x-1 hover:translate-y-1 transition-transform duration-200"
            data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {isExternal ? 'VIEW PROJECT' : 'VIEW DETAILS'}
            {isExternal && <ExternalLink className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  );
}
