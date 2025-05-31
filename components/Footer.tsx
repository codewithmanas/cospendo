import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="flex flex-col">
                    <div className="mb-4">
                        <span className="text-white font-bold text-2xl">CoSpendo</span>
                    </div>
                    <p className="text-gray-400 mb-4">Split expenses, not friendships. The easiest way to manage shared living expenses.</p>

                    <div className="flex items-center space-x-4">
                        <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.x.com/" className="text-gray-400 hover:text-blue-400 transition-colors">
                           <Twitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/" className="text-gray-400 hover:text-pink-600 transition-colors">
                           <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/" className="text-gray-400 hover:text-blue-700 transition-colors">
                           <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-teal-400 transition-colors">Features</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Integrations</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">What{`'s`} New</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Community</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Guides</a></li>
                    </ul>
                </div>
          
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Legal</a></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} CoSpendo. All rights reserved.
                </p>

                <div className="mt-4 md:mt-0 flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Cookie Policy</a>
                </div>
            </div>

      </div>
    </footer>
  );
};

export default Footer;
