"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const HeroCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Button variant="primary" size="lg" className="group cursor-pointer">
        Get Started Free
        <ArrowRight
          className="ml-2 transition-transform group-hover:translate-x-1"
          size={24}
        />
      </Button>
      <Button
        onClick={() => scrollToSection("how-it-works")}
        variant="outline"
        size="lg"
        className="cursor-pointer"
      >
        See How It Works
      </Button>
    </>
  );
};

export default HeroCTA;
