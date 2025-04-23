"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="shadow-lg rounded-xl p-8 glow-effect">
      <h2 className="text-4xl font-bold text-[#05fcec] mb-4 border-b pb-2 border-blue-200">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-4 text-[#faf8f1]">
          <p className="text-xl">Phone: 0919 722 7642</p>
          <p className="text-xl">Email: rhoalpadilla10@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg font-semibold text-[#05fcec]">
            Send me a message!
          </p>
          <form
            action="https://formsubmit.co/rhoalpadilla10@gmail.com"
            method="POST"
            className="space-y-4"
          >
          
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-[#faf8f1] text-black px-6 py-2 rounded-md hover:bg-[#05fcec] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
