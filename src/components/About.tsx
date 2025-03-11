import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";


const About = () => {
  return (
    <section id="about-us" className="pt-20">
      <div className="text-start">
          <h2 className="text-primary text-3xl font-bold mb-4">
          About Us
          </h2>
          <p className="text-neutral-dark/80">
          Leading provider of AI-driven customer solutions, delivering
          intelligent automation and advanced data analytics to businesses of
          all sizes.
          </p>
        </div>

      <section className="py-10 container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-dark">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Chatbots & Virtual Assistants",
              description:
                "Intelligent conversational interfaces that enhance customer experience",
              icon: "💬",
              color: "bg-primary",
            },
            {
              title: "Data Analytics & Predictive AI",
              description:
                "Transform your data into actionable business insights",
              icon: "📊",
              color: "bg-secondary-green",
            },
            {
              title: "Natural Language Processing",
              description:
                "Advanced text analysis and understanding capabilities",
              icon: "🔤",
              color: "bg-secondary-purple",
            },
            {
              title: "Mobile Applications",
              description:
                "AI-powered mobile solutions for businesses on the go",
              icon: "📱",
              color: "bg-secondary-orange",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="pt-6">
                <div
                  className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-dark">
                  {service.title}
                </h3>
                <p className="text-secondary-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-dark">
                Transforming Industries Through AI
              </h2>
              <p className="text-secondary-gray mb-6">
                At AI Adviser Solutions, we empower businesses with cutting-edge
                AI technologies tailored to their industry needs. Our solutions
                are built on the latest advancements in machine learning, deep
                learning, and big data, ensuring optimal efficiency and high
                accuracy in every implementation.
              </p>

              <div className="space-y-4">
                {[
                  "Streamline operations with intelligent automation",
                  "Improve customer engagement through personalized experiences",
                  "Drive business growth with data-driven insights",
                  "Stay ahead of the competition with innovative AI solutions",
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary-green mr-2 flex-shrink-0" />
                    <p className="text-secondary-gray">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gray-100 opacity-90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Strong Middle East Presence
                </h3>
                <p className="text-lg mb-6 text-gray-700">
                  Serving businesses across Egypt, UAE, and KSA with specialized
                  AI solutions
                </p>
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  {["Egypt", "UAE", "KSA"].map((country, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-20 rounded-lg shadow-sm p-4 backdrop-blur-sm"
                    >
                      <p className="font-semibold text-black">{country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
