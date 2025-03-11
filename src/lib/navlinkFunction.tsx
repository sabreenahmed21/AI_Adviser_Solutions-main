"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current: string | null = null;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (sectionTop <= 150 && sectionTop + sectionHeight > 150 && sectionId) {
          current = `#${sectionId}`;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isAnchorLink = href.startsWith("#");

  const isActive = isAnchorLink
    ? activeSection === href
    : pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${
        isActive ? "text-secondary font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
