"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/lib/navlinkFunction";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "#about-us", label: "About Us" },
    { href: "#key-differentiators", label: "Key Differentiators" },
    { href: "#our-services", label: "Services" },
    { href: "#case-studies", label: "Industries & Case Studies" },
    { href: "#why-choose-us", label: "Choose Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-gray-900  transition-all duration-300 ${isScrolled ? 'bg-neutral  shadow-sm' : 'bg-transparent '
      }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="relative w-48 h-24">
            <Image src="/assets/rm-logo.png" alt="logo" fill className="object-contain" />
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end">

          <nav aria-label="Global" className="hidden lg:flex items-center justify-between w-full">
            <ul className="flex items-center gap-4 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className={`${isScrolled ? 'text-gray-900' : 'text-gray-900'
                      } font-medium transition-colors hover:text-secondary`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="hover:bg-primary-dark text-white bg-primary mr-12"
            >
              <Link href="#contact-us">Contact Us</Link>
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button className="block rounded-sm p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden mr-12">
                <span className="sr-only">Toggle menu</span>
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white p-6">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-4 text-base">
                  {links.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        href={link.href}
                        className={`block py-3 ${pathname === link.href
                            ? "text-secondary font-semibold"
                            : "text-gray-600"
                          } transition hover:text-secondary`}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="hover:bg-primary-dark text-white bg-primary w-full mt-6"
                >
                  <Link href="#contact-us">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
