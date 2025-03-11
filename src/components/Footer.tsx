import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-neutral-dark text-white px-container-padding mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-5">

        <div className="flex flex-col items-start">
          <Image
            src='/assets/logo.jpg'
            alt="ADVIX Solutions Logo"
            width={150}
            height={50}
            className="mb-4 object-contain"
          />
          <h3 className="text-xl font-bold mb-4">ADVIX Solutions</h3>
          <p className="text-neutral-light opacity-70 text-sm leading-relaxed max-w-xs">
            Innovating the future with AI-driven solutions, empowering businesses
            across the Middle East with cutting-edge technology and expertise.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "#intro" },
              { label: "Services", href: "#our-services" },
              { label: "About Us", href: "#about-us" },
              { label: "Contact", href: "#contact-us" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-neutral-light opacity-70 hover:opacity-100 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Our Locations</h4>
          <ul className="space-y-2">
            {[
              "Cairo, Egypt",
              "Dubai, UAE",
              "Riyadh, KSA",
            ].map((location, index) => (
              <li
                key={index}
                className="text-neutral-light opacity-70 hover:opacity-100 transition-opacity"
              >
                {location}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-2 text-neutral-light opacity-70">
            <li>Email: sales@advixs.com</li>
          
          </ul>
        </div>
      </div>


      <div className="border-t border-white border-opacity-20 pt-5 text-center">
        <p className="text-neutral-light opacity-70">
          © {new Date().getFullYear()} ADVIX Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
