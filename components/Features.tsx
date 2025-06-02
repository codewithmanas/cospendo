import { Calendar, CheckCircle, CreditCard, Home, Receipt, User } from "lucide-react";
import React from "react";

const features = [
    {
        title: "Household Management",
        description: "Create a digital home for your household. Invite roommates with a simple code and manage shared expenses together.",
        icon: Home
    },
    {
        title: "Split Bills Easily",
        description: "Split rent, utilities, and other expenses equally, by percentage, or with custom amounts for each person.",
        icon: CreditCard
    },
    {
        title: "Track Expenses",
        description: "Upload receipts, enter expenses manually, and see who paid for what, all in one organized place.",
        icon: Receipt
    },
    {
        title: "Recurring Payments",
        description: "Set up automatic recurring expenses for rent, utilities, and subscriptions on any schedule.",
        icon: Calendar 
    },
    {
        title: "Settle Debts",
        description: "See who owes what to whom and settle debts with integrated payment options or cash tracking.",
        icon: User 
    },
    {
        title: "Chore Management",
        description: "Assign and track household chores with rotation schedules and reminders for everyone.",
        icon: CheckCircle 
    },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
            Everything you need to manage shared living
            </h2>
            <p className="my-6 text-gray-600 text-lg sm:text-xl text-center">
            CoSpendo makes it simple to track expenses, split bills, and manage
            chores with your roommates - all in one app.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div key={index} className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
                        <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                            <Icon className="w-6 h-6 text-teal-500" />
                        </div>
                        <h3 className="text-gray-900 font-semibold text-xl mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                )
            })}

        </div>
      </div>
    </section>
  );
};

export default Features;
