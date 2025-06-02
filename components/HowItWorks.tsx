import React from "react";
import Button from "./Button";

  const steps = [
    {
      number: "01",
      title: "Create your household",
      description: "Sign up and create a digital household. Give it a name and customize settings to fit your living situation."
    },
    {
      number: "02",
      title: "Invite your roommates",
      description: "Generate an invite code or link to share with your roommates. They'll join your household in seconds."
    },
    {
      number: "03",
      title: "Add your shared expenses",
      description: "Enter recurring bills like rent and utilities, or add one-time expenses as they come up."
    },
    {
      number: "04",
      title: "Split costs automatically",
      description: "Choose how to split each expense - equally, by percentage, or with custom amounts for each person."
    }
  ];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CoSpendo Works</h3>
                <p className="text-lg text-gray-600">Get started in minutes with these simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <div className="space-y-12">
                        {steps.map((item, index) => (
                            <div key={index} className="flex">
                                <div className="mr-6 shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center font-bold">{item.number}</div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-12">
                            <Button size="lg" variant="primary" className="cursor-pointer">Get Started Now</Button>
                        </div>
                    </div>

                </div>

                {/* Right */}
                <div className="relative">
                    <div className="rounded-2xl bg-white shadow-lg">
                        <div className="p-6 rounded-t-lg bg-gradient-to-r from-purple-500 to-teal-500">
                            <div className="text-2xl font-bold text-white mb-4">Monthly Summary</div>
                            <p className="text-white/80">Sunset Apartment - April</p>
                        </div>

                        <div className="p-6">
                            <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 mb-3">Who owes who</h4>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-bold text-sm">M</div>
                                            <span className="ml-3 text-gray-900">Mike owes Sarah</span>
                                        </div>
                                        <span className="font-medium text-green-600">$42.25</span>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-sm">J</div>
                                            <span className="ml-3 text-gray-900">Jake owes Lisa</span>
                                        </div>
                                        <span className="font-medium text-blue-600">$67.50</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 font-bold text-sm">S</div>
                                            <span className="ml-3 text-gray-900">Sarah owes Jake</span>
                                        </div>
                                        <span className="font-medium text-purple-600">$15.75</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                 <h4 className="text-lg font-medium text-gray-900 mb-3">This month{`'s`} spending</h4>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="text-sm text-gray-500">Rent & Utilities</div>
                                        <div className="font-medium text-xl text-gray-900">$2,750.00</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="text-sm text-gray-500">Rent & Utilities</div>
                                        <div className="font-medium text-xl text-gray-900">$2,750.00</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="text-sm text-gray-500">Rent & Utilities</div>
                                        <div className="font-medium text-xl text-gray-900">$2,750.00</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                        <div className="text-sm text-gray-500">Rent & Utilities</div>
                                        <div className="font-medium text-xl text-gray-900">$2,750.00</div>
                                    </div>
                                </div>

                            </div>

                                <button className="w-full cursor-pointer py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors">
                                    Settle All Debts
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
      </div>
    </section>
  );
};

export default HowItWorks;
