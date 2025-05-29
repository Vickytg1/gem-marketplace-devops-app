
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">💎</span>
              </div>
              <span className="text-xl font-bold">JewelMarket</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted marketplace for authentic second-hand luxury jewelry. 
              Quality verified, authenticity guaranteed.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Gold Jewelry</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Silver Jewelry</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Diamond Jewelry</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Gemstones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Platinum Jewelry</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Authentication Process</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Selling Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-slate-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-slate-400">support@jewelmarket.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-slate-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 JewelMarket. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
