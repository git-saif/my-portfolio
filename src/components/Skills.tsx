
import React from 'react';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { name: 'HTML & CSS', percent: 95 },
  { name: 'JavaScript', percent: 90 },
  { name: 'React', percent: 85 },
  { name: 'Node.js', percent: 80 },
  { name: 'TypeScript', percent: 75 },
  { name: 'UI/UX ডিজাইন', percent: 70 },
];

const servicesData = [
  {
    title: 'ওয়েব ডেভেলপমেন্ট',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: 'আধুনিক এবং রেসপন্সিভ ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট।',
  },
  {
    title: 'UI/UX ডিজাইন',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'ব্যবহারকারী-বান্ধব এবং আকর্ষণীয় ইন্টারফেস ডিজাইন।',
  },
  {
    title: 'মোবাইল অ্যাপ ডেভেলপমেন্ট',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: 'React Native দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরি করা।',
  },
  {
    title: 'API ডেভেলপমেন্ট',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'REST এবং GraphQL API ডেভেলপমেন্ট এবং ইন্টিগ্রেশন।',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-heading">দক্ষতা এবং সেবাসমূহ</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমি বিভিন্ন টেকনোলজি এবং টুলস ব্যবহার করে থাকি। নিচে আমার কিছু প্রধান দক্ষতা দেখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">টেকনিক্যাল স্কিলস</h3>
            <div className="space-y-6">
              {skillsData.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.percent}%</span>
                  </div>
                  <Progress value={skill.percent} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">সেবাসমূহ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-medium mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
