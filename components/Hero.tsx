import React from "react";
// import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative pt-20 pb-24 sm:pt-24 sm:pb-32 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-none">
              Split expenses, <span className="text-teal-500">not friendships</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600">
              CoSpendo makes it easy to manage shared expenses, split bills, and
              track chores with your roommates - all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <Button className="text-lg px-12 py-6 bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 cursor-pointer group">
                Get Started Free
                <ArrowRight
                  className="ml-1 transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </Button>
              <Button className="text-lg px-8 py-6 bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500 cursor-pointer">
                See How It Works
              </Button> */}
              <Button variant="primary" size="lg" className="group cursor-pointer">
                Get Started Free
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={24}
                />
              </Button>
              <Button variant="outline" size="lg" className="cursor-pointer">
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex items-center text-gray-500 text-sm">
              <span className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-2 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-2 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free for basic use
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transform transition-transform duration-300">
              <div className="relative rounded-t-2xl bg-gradient-to-r from-teal-500 to-purple-500 p-6 pb-48">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold">
                    Sunset Apartment
                  </h3>
                  <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">
                    4 members
                  </div>
                </div>
              </div>

              <div className="relative z-10 -mt-40 bg-white mx-4 rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <h4 className="text-gray-900 font-semibold">
                      April Expenses
                    </h4>
                    <span className="text-sm text-gray-500">
                      Total: $3,248.50
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 font-bold">
                        S
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Rent</p>
                        <p className="text-sm text-gray-500">Paid by Sarah</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-medium text-gray-900">$2,400.00</p>
                      <p className="text-sm text-teal-500">$600 per person</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 font-bold">
                        J
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Groceries</p>
                        <p className="text-sm text-gray-500">Paid by Jake</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-medium text-gray-900">$148.50</p>
                      <p className="text-sm text-teal-500">$49.50 per person</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                        L
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Utilities</p>
                        <p className="text-sm text-gray-500">Paid by Lisa</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-medium text-gray-900">$350.00</p>
                      <p className="text-sm text-teal-500">$87.50 per person</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full cursor-pointer py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 font-medium transition-colors duration-300">
                      View All Expenses
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
