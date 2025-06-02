"use client";

import React, { useState } from "react";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: email submission logic here
    setIsSubmitted(true);
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl shadow-sm bg-white max-w-3xl mx-auto p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get early access to CoSpendo
            </h2>
            <p className="text-gray-600">
              Join our waiting list to be among the first to experience CoSpendo
              when we launch.
            </p>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
                <p className="text-teal-700 font-medium">
                  Thanks for signing up! We{`'`}ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3"
              >
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="cursor-pointer shrink-0 whitespace-nowrap"
                >
                  Join The Waitlist
                </Button>
              </form>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            {`We'll`} never share your email with anyone else. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
