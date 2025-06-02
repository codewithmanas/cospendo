import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to simplify shared living?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of households using CoSpendo to manage expenses,
            split bills, and track chores with ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white !text-teal-600 hover:!text-white cursor-pointer transition-colors duration-300"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-red cursor-pointer"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. Free for basic use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
