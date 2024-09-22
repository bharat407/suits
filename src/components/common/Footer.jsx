import React from 'react';

const LinksSection = () => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Investor Relations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">We’re hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Customer Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Free Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">What’s New</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Report a Bug</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">B2B Sitemap</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Sitemap</a></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">JD Verticals</h2>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">B2B</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">All India</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Advertising & Pr</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Doctors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Agriculture</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Bills & Recharge</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Apparel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Beauty & Personal Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Automobiles & Two Wheelers</a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksSection;
