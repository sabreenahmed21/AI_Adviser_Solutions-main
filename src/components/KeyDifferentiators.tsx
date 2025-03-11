import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  LineChart,
  BrainCircuit,
  Scale,
  Globe,
  Cable,
  RefreshCw,
  Check,
} from "lucide-react";
import { DifferentiatorProps } from "@/types";

export default function KeyDifferentiators() {

  const differentiators: DifferentiatorProps[] = [
    {
      id: "business-centric",
      title: "Business-Centric AI Solutions",
      icon: <LineChart className="h-8 w-8 text-white" />,
      description:
        "We design AI models that align with specific business goals, ensuring measurable ROI for your organization.",
      points: [
        "We design AI models that align with specific business goals, ensuring measurable ROI.",
        "Our solutions enhance operational efficiency and customer engagement.",
      ],
      color: "#0D6EFD", 
      bgClass: "bg-[#0D6EFD]",
    },
    {
      id: "advanced-ai",
      title: "Advanced AI & Machine Learning Expertise",
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      description:
        "Our team leverages cutting-edge AI technologies to build intelligent solutions for complex business challenges.",
      points: [
        "Proven experience in deploying NLP, Predictive Analytics, and Deep Learning.",
        "Custom AI models tailored to industry-specific needs.",
      ],
      color: "#6F42C1", 
      bgClass: "bg-secondary-purple",
    },
    {
      id: "scalable",
      title: "Scalable & Flexible AI Deployment",
      icon: <Scale className="h-8 w-8 text-white" />,
      description:
        "Future-proof your investment with AI solutions that grow and evolve alongside your business needs.",
      points: [
        "AI solutions designed to grow with your business.",
        "Cloud-based and on-premises AI implementations.",
      ],
      color: "#28A745", 
      bgClass: "bg-secondary-green",
    },
    {
      id: "multilingual",
      title: "Multilingual & Regional AI Specialization",
      icon: <Globe className="h-8 w-8 text-white" />,
      description:
        "Culturally-aware AI solutions optimized for the unique requirements of the Middle East market.",
      points: [
        "Specialized in Arabic NLP for the MENA region.",
        "AI chatbots and automation tailored for businesses in Egypt, UAE, and KSA.",
      ],
      color: "#FD7E14", 
      bgClass: "bg-secondary-orange",
    },
    {
      id: "integration",
      title: "Seamless Technology Integration",
      icon: <Cable className="h-8 w-8 text-white" />,
      description:
        "Our AI solutions connect smoothly with your existing technology stack, enhancing capabilities without disruption.",
      points: [
        "AI-powered automation that integrates with ERP, CRM, and enterprise software.",
        "API-driven connectivity for smooth interoperability with existing systems.",
      ],
      color: "#03174C",
      bgClass: "bg-primary",
    },
    {
      id: "optimization",
      title: "Continuous AI Optimization & Support",
      icon: <RefreshCw className="h-8 w-8 text-white" />,
      description:
        "We ensure your AI solutions remain effective and improve over time through ongoing enhancements and support.",
      points: [
        "Ongoing model training and enhancement for higher accuracy and adaptability.",
        "24/7 AI monitoring, support, and regular updates.",
      ],
      color: "#6C757D", 
      bgClass: "bg-secondary-gray",
    },
  ];

  return (
    <section id='key-differentiators' className="pt-20">
        <div className="text-start mb-8">
          <h2 className="text-primary text-3xl font-bold mb-4">
            Key Differentiators
          </h2>
          <p className="text-neutral-dark/80 mb-6">
            Discover what sets our AI solutions apart and why leading businesses
            choose us as their digital transformation partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((differentiator) => (
            <Card key={differentiator.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div 
                  className={`w-16 h-16 ${differentiator.bgClass} rounded-lg flex items-center justify-center mb-4`}
                >
                  {differentiator.icon}
                </div>
                <CardTitle className="text-2xl">{differentiator.title}</CardTitle>
                <CardDescription>{differentiator.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {differentiator.points.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <Check
                        className="h-5 w-5 mr-3 shrink-0 mt-1"
                        style={{ color: differentiator.color }}
                      />
                      <p className="text-neutral-dark/90">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  );
}