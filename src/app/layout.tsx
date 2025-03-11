import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans", 
  subsets: ["latin"],
  weight: ["400", "500","600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Advix",
  description: "Advix Solutions is a leading provider of AI-driven customer solutions, specializing in intelligent automation, advanced data analytics, and multilingual AI technologies. With expertise in Chatbots, Predictive AI, NLP, and Mobile Apps, we empower businesses in Egypt, UAE, and KSA to streamline operations, enhance customer engagement, and drive growth through tailored, scalable AI solutions.",
  keywords: [
    'Advix solutions',
    'Chatbots and virtual assistants', 
    'Data analytics',
    'Predictive AI',
    'Natural Language Processing (NLP)',
    'Arabic NLP',
    'Mobile app development',
    'AI integration',
    'Business automation',
    'Egypt AI solutions',
    'UAE AI solutions',
    'KSA AI solutions',
    'Real estate AI',
    'Retail predictive analytics',
    'Healthcare AI',
    'Pharmacy automation',
    'Scalable AI deployment',
    'Multilingual AI'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}