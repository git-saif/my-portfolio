
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-blue-600 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Working on laptop"
                className="rounded-lg shadow-lg w-full relative z-10"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl font-bold mb-2 font-heading">আমার সম্পর্কে</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              নমস্কার! আমি বাংলাদেশের একজন উদীয়মান ওয়েব ডেভেলপার ও ডিজাইনার। গত ৫ বছর ধরে আমি ফ্রন্টএন্ড এবং ব্যাকএন্ড ডেভেলপমেন্টের সাথে কাজ করছি। আমি React, Next.js, Node.js এবং ডাটাবেস টেকনোলজি নিয়ে কাজ করতে পছন্দ করি।
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              আমার লক্ষ্য হল ব্যবহারকারীর অভিজ্ঞতা উন্নত করা এবং সমস্যার সমাধান করার জন্য ইনোভেটিভ ওয়েব অ্যাপ্লিকেশন তৈরি করা। আমি সর্বদা নতুন টেকনোলজি শিখতে আগ্রহী এবং আমার দক্ষতা উন্নত করতে চাই।
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">নাম:</h3>
                <p className="text-gray-600">শাহরিয়ার আহমেদ</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">ইমেইল:</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">বয়স:</h3>
                <p className="text-gray-600">২৮ বছর</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">ঠিকানা:</h3>
                <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              রেজুমে ডাউনলোড করুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
