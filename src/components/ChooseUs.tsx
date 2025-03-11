import React from "react";
import {
  Settings,
  BrainCircuit,
  Globe,
  Code,
  LifeBuoy,
} from "lucide-react";
import { TbCloudDataConnection } from "react-icons/tb";
import { Card, CardContent } from "./ui/card";
import { FeatureCardProps } from "@/types";


const FeatureCard = ({
  icon,
  title,
  description,
  color,
}: FeatureCardProps) => {
  return (
    <Card
      className="h-full hover:shadow-lg transition-all border-t-4"
      style={{ borderTopColor: color }}
    >
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="p-3 rounded-full mb-4 w-16 h-16 flex items-center justify-center"
            style={{ backgroundColor: color + "20" }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold text-neutral-dark mb-3">{title}</h3>
          <p className="text-neutral-dark/80">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
export default function ChooseUs() {
  const features = [
    {
      icon: <Settings className="h-8 w-8" style={{ color: "#0D6EFD" }} />,
      title: "Better Customization",
      description:
        "Tailored AI solutions designed specifically to meet your industry-specific needs and business requirements.",
      color: "#0D6EFD", // primary
      delay: 0,
    },
    {
      icon: <BrainCircuit className="h-8 w-8" style={{ color: "#6F42C1" }} />,
      title: "Industry-Specific Expertise",
      description:
        "AI solutions optimized for real business impact across multiple sectors including healthcare, retail, and finance.",
      color: "#6F42C1", // secondary.purple
      delay: 1,
    },
    {
      icon: <Globe className="h-8 w-8" style={{ color: "#FD7E14" }} />,
      title: "Regional Knowledge",
      description:
        "In-depth knowledge of Egypt, UAE, and KSA markets, including cultural nuances and business practices.",
      color: "#FD7E14", // secondary.orange
      delay: 2,
    },
    {
      icon: <Code className="h-8 w-8" style={{ color: "#28A745" }} />,
      title: "Strong Technical Expertise",
      description:
        "Advanced capabilities in NLP, Machine Learning, Deep Learning, and Big Data to power intelligent solutions.",
      color: "#28A745", // secondary.green
      delay: 3,
    },
    {
      icon: (
        <TbCloudDataConnection
          className="h-8 w-8"
          style={{ color: "#0056b3" }}
        />
      ),
      title: "Seamless Integration",
      description:
        "AI solutions designed to integrate smoothly with your existing business infrastructure and systems.",
      color: "#0056b3", // primary.dark
      delay: 4,
    },
    {
      icon: <LifeBuoy className="h-8 w-8" style={{ color: "#6C757D" }} />,
      title: "Continuous Support & Innovation",
      description:
        "Ongoing updates, support, and AI model improvements to ensure your systems evolve with your business.",
      color: "#6C757D", // secondary.gray
      delay: 5,
    },
  ];

  return (
    <section id='why-choose-us' className="pt-20">
        <div className="text-start">
          <h2 className="text-primary text-3xl font-bold mb-4 ">
            Our Competitive Advantages
          </h2>
          <p className="text-neutral-dark/80 mb-6">
            We combine technical expertise, regional knowledge, and industry
            experience to deliver AI solutions that create real business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
    </section>
  );
}
