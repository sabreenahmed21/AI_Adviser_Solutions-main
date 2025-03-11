"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      {isVisible && (
        <>
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="rounded-full p-2 shadow-md"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </>
      )}
    </div>
  );
};

export default ScrollButton;
