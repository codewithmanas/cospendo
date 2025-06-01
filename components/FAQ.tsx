"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const faqs = [
  {
    question: "How does CoSpendo help split expenses?",
    answer:
      "CoSpendo allows you to enter any shared expense and choose how to split it: equally among all roommates, by custom percentages, or with specific amounts for each person. The app then calculates who owes what to whom and keeps track of all balances automatically.",
  },
  {
    question: "Is there a limit to how many people can be in one household?",
    answer:
      "The free plan supports up to 5 people in a household. For larger households or co-living spaces, we offer premium plans with support for up to 15 members.",
  },
  {
    question: "Can I connect my bank account or payment apps?",
    answer:
      "Yes! CoSpendo integrates with popular payment methods like Venmo, PayPal, and Zelle for easy settlement. You can also track cash payments or bank transfers manually within the app.",
  },
  {
    question: "How does the chore management feature work?",
    answer:
      "The chore management system lets you create recurring or one-time chores, assign them to household members, and set up rotation schedules. Everyone receives reminders when their chores are due, and the app tracks completion history.",
  },
  {
    question: "Is my financial information secure?",
    answer:
      "Absolutely. CoSpendo uses bank-level encryption to protect all your data. We never store your actual bank account or credit card details - we only facilitate payments through trusted third-party providers.",
  },
  {
    question: "What if someone doesn't pay their share?",
    answer:
      "CoSpendo provides clear visibility into who owes what, with automated reminders for outstanding balances. The app maintains a complete history of all expenses and payments for transparency and accountability.",
  },
];

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 border-b border-gray-200">
      <button
        className="w-full text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </span>
      </button>

      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about CoSpendo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
