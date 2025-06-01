"use client";

import React, { useEffect, useState } from "react";
// import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navItems = [
  { text: "Features", id: "features" },
  { text: "How It Works", id: "how-it-works" },
  { text: "Testimonials", id: "testimonials" },
  { text: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(typeof window !== undefined) {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth"});
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl text-teal-500 font-bold">CoSpendo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer"
              >
                {item.text}
              </button>
            ))}

            {/* <Button className="cursor-pointer text-base px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2">
              Get Started
            </Button> */}
            <Button variant="primary" size="md" className="cursor-pointer">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 mt-4 py-4 px-2 bg-white rounded-lg shadow-lg transition-all">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-teal-500 py-2 transition-colors cursor-pointer"
                >
                  {item.text}
                </button>
              ))}
              {/* <Button className="cursor-pointer text-base px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2">
                Get Started
              </Button> */}
              <Button variant="primary" size="md" className="w-full cursor-pointer">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
