export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export interface DifferentiatorProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  color: string;
  bgClass: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  color: string;
}
