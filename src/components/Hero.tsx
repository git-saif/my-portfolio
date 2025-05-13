
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-10 bottom-20 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 pt-24 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <span className="text-blue-600 font-medium mb-4 block">Salamun A'laik! This is</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
              MD Saiful Islam 
{/*               <span className="gradient-text">ওয়েব ডেভেলপার</span> এবং ডিজাইনার */}
            </h1>
            <h3> I am a Full Stack Web Developer</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
             I am Specialized in PHP, MySQL & Laravel with Proficient in creating responsive and dynamic web applications based on user needs using a combination of technologies including JavaScript and Bootstrap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" size="lg">
                View Projects
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative animate-slide-in-right">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-8 bg-blue-200 rounded-full"></div>
              <div className="absolute inset-[4rem] bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
