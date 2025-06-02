import Image from "next/image";
import React from "react";
const testimonials = [
  {
    name: "Sarah Johnson",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    profession: "Grad Student",
    usedIn: "Shares with 3 roommates",
    quote:
      "CoSpendo has completely transformed how we manage our apartment finances. No more awkward money conversations or spreadsheet nightmares!",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    profession: "Marketing Professional",
    usedIn: "Co-living space",
    quote:
      "The bill-splitting feature is a game-changer. We used to have so many issues with uneven expenses, but now everything is transparent and fair.",
    rating: 5,
  },
  {
    name: "Jamie Chen",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
    profession: "Software Engineer",
    usedIn: "Shares with partner",
    quote:
      "I love how easy it is to track who paid for what. The notification system means I never forget to pay my share of rent or utilities.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Loved by roommates everywhere
          </h2>
          <p className="text-gray-600 text-lg">
            See how CoSpendo is helping people manage shared expenses with ease
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration flex flex-col">
              <div className="flex-1">
                <div className="mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="italic mb-6 text-gray-600">{`"${testimonial.quote}"`}</div>
              </div>


              <div className="flex items-center">
                <div>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={24}
                    height={24}
                    priority
                    quality={100}
                    className="mr-4 w-12 h-12 rounded-full overflow-hidden object-cover "
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {`${testimonial.profession}, ${testimonial.usedIn}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
