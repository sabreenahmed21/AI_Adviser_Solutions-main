import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquare,
  BarChart2,
  Brain,
  Smartphone,
  Link,
  ArrowRight,
} from "lucide-react";

const serviceItems = [
  {
    title: "Chatbots & Virtual Assistants",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    color: "bg-blue-50",
    description: "Intelligent AI-powered conversation systems for businesses",
    points: [
      "AI-powered chatbots for customer support & automation",
      "Integration with WhatsApp, Facebook Messenger, websites, and mobile apps",
      "Multilingual NLP capabilities (including Arabic)",
    ],
  },
  {
    title: "Data Analytics & Predictive AI",
    icon: <BarChart2 className="h-10 w-10 text-secondary-green" />,
    color: "bg-green-50",
    description: "Transform your data into actionable business intelligence",
    points: [
      "Advanced business insights powered by AI",
      "Customer behavior analysis and sales forecasting",
      "Real-time data visualization dashboards",
    ],
  },
  {
    title: "Natural Language Processing",
    icon: <Brain className="h-10 w-10 text-secondary-purple" />,
    color: "bg-purple-50",
    description: "Sophisticated text analysis and automation solutions",
    points: [
      "AI-driven document processing & sentiment analysis",
      "Automated response systems for call centers & customer service",
      "Arabic NLP solutions tailored for the Middle East market",
    ],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-10 w-10 text-secondary-orange" />,
    color: "bg-orange-50",
    description: "Custom mobile applications with AI integration",
    points: [
      "AI-integrated mobile applications (iOS & Android) using Flutter",
      "Personalized user experiences driven by AI",
      "Custom app development for various industries",
    ],
  },
  {
    title: "Integration Capabilities",
    icon: <Link className="h-10 w-10 text-secondary-gray" />,
    color: "bg-gray-50",
    description: "Connect and enhance your existing business systems",
    points: [
      "Seamless integration with CRM systems, ERP platforms, and cloud services",
      "API-based connectivity for third-party applications and enterprise software",
      "AI-driven automation for workflow and business processes",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="our-services" className="pt-20">
        <div className="text-start mb-12">
          <h2 className="text-primary text-3xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-secondary-gray text-start">
            Cutting-edge AI solutions tailored to your business needs, designed
            to enhance efficiency, provide valuable insights, and create
            exceptional customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className={`${service.color} rounded-t-lg p-6`}>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-center text-neutral-dark">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-center mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-neutral-dark text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  );
}
