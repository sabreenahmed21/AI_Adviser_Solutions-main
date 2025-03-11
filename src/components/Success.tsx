"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CaseStudy } from "@/types";
import { Badge } from "./ui/badge";

export default function ProvenSuccess() {

  const caseStudies: CaseStudy[] = [
    {
      id: "real-estate-chatbot",
      name: "Real Estate",
      industry: "real-estate",
      title: "AI Chatbot for Real Estate Lead Generation",
      client: "A leading real estate agency in the UAE",
      challenge:
        "Managing high volumes of property inquiries and lead follow-ups.",
      solution:
        "AI-powered chatbot for answering queries, scheduling viewings, and filtering leads.",
      outcome:
        "Response times improved by 80%, lead conversion increased by 45%.",
      color: "bg-primary",
    },
    {
      id: "retail-predictive-ai",
      name: "Retail & E-commerce",
      industry: "retail",
      title: "Predictive AI for Retail Sales Optimization",
      client: "A large e-commerce platform in KSA",
      challenge: "Predicting customer demand and optimizing stock levels.",
      solution: "Predictive AI model analyzing purchase patterns and trends.",
      outcome: "Stock shortages reduced by 30%, overall sales boosted by 20%.",
      color: "bg-secondary-purple",
    },
    {
      id: "healthcare-diagnosis",
      name: "Healthcare",
      industry: "healthcare",
      title: "AI-Powered Diagnosis Assistance in Healthcare",
      client: "A multi-specialty hospital in the UAE",
      challenge:
        "Delays in diagnosing critical conditions due to high patient volume.",
      solution:
        "AI-driven diagnostic assistant analyzing symptoms and medical history.",
      outcome: "Diagnosis time reduced by 40%, faster treatment plans enabled.",
      color: "bg-secondary-green",
    },
    {
      id: "healthcare-prescription",
      name: "Healthcare",
      industry: "healthcare",
      title: "AI-Driven Prescription Management for Pharmacies",
      client: "A leading pharmacy chain in KSA",
      challenge:
        "Automating prescription verification and regulatory compliance.",
      solution:
        "AI-based system reading and validating prescriptions, cross-checking drug interactions.",
      outcome:
        "Prescription errors reduced by 35%, pharmacy workflow improved by 50%.",
      color: "bg-secondary-orange",
    },
    {
      id: "real-estate-app",
      name: "Real Estate",
      industry: "real-estate",
      title: "Property Adviser App – AI-Powered Real Estate Assistance",
      client: "A real estate startup in UAE",
      challenge:
        "Enhancing user experience with AI-driven property recommendations.",
      solution:
        "AI-powered mobile app integrating predictive analytics and virtual property tours.",
      outcome:
        "User engagement increased by 70%, conversion rates improved by 50%.",
      color: "bg-blue-500",
    },
    {
      id: "corporate-assistant",
      name: "Corporate",
      industry: "corporate",
      title: "AI-Powered Virtual Assistant for Businesses",
      client: "A corporate client in KSA",
      challenge:
        "Managing scheduling, customer inquiries, and internal communications.",
      solution:
        "AI-driven virtual assistant automating workflows and responses.",
      outcome:
        "Administrative workload reduced by 60%, efficiency improved significantly.",
      color: "bg-secondary-gray",
    },
  ];

  const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => (
    <Card className="h-full hover:shadow-lg transition-all">
      <CardHeader className={`${caseStudy.color} text-white rounded-t-lg`}>
        <Badge className="bg-white/20 hover:bg-white/30 text-white mb-2">
          {caseStudy.name}
        </Badge>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-neutral-dark">Client</h4>
            <p className="text-neutral-dark/80">{caseStudy.client}</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-dark">Challenge</h4>
            <p className="text-neutral-dark/80">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-dark">Solution</h4>
            <p className="text-neutral-dark/80">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-dark">Outcome</h4>
            <p className="text-neutral-dark/80">{caseStudy.outcome}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="case-studies" className="pt-20">
      <div className="text-start">
        <h2 className="text-primary text-3xl font-bold mb-4">
          Industries We Serve
        </h2>
        <p className="text-neutral-dark/80 mb-6">
          Our AI solutions deliver measurable results across diverse industries
          in the MENA region.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index}>
            <CaseStudyCard caseStudy={caseStudy} />
          </div>
        ))}
      </div>
    </section>
  );
}
