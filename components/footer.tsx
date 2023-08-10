import React from "react";

export default function Footer() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <div className="flex">
        <div className="flex-1">
          <p className="mb-3">About us</p>
          <ul className="space-y-4">
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              About JiJi
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              We are hiring!
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Terms & Conditiions
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Biling Policy
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="mb-3">Support</p>
          <ul className="space-y-4">
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              support@jiji.ng
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Safety tips
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Contact Us
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="mb-3">Our Apps</p>
          <ul className="space-y-4">
            <li>
              <img
                src="https://assets.jiji.ng/static/img/single-images/app-store.svg"
                alt="App Store"
                className="w-20 md:w-40"
              />
            </li>
            <li>
              <img
                src="https://assets.jiji.ng/static/img/single-images/google-play.svg"
                alt="Google Play"
                className="w-20 md:w-40"
              />
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="mb-3">Our resources</p>
          <ul className="space-y-4">
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Our blog
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Jiji on FB
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm  hover:text-green-200 hover:cursor-pointer">
              Our Instagram
            </li>
            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Our Youtube
            </li>

            <li className="text-green-600 md:text-white transition-colors text-sm hover:text-green-200 hover:cursor-pointer">
              Our Twitter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
