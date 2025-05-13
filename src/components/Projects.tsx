
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'ই-কমার্স ওয়েবসাইট',
    description: 'একটি আধুনিক ই-কমার্স প্লাটফর্ম যা React এবং Node.js দিয়ে তৈরি করা হয়েছে।',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'পোর্টফোলিও ওয়েবসাইট',
    description: 'একটি সুন্দর পোর্টফোলিও ওয়েবসাইট যা Next.js এবং Tailwind CSS দিয়ে তৈরি করা হয়েছে।',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 3,
    title: 'টাস্ক ম্যানেজমেন্ট অ্যাপ',
    description: 'একটি টাস্ক ম্যানেজমেন্ট অ্যাপ্লিকেশন যা ব্যবহারকারীদের টাস্কগুলি সংগঠিত করতে সাহায্য করে।',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 font-heading">আমার প্রজেক্টস</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            নিচে আমার কিছু প্রিয় প্রজেক্ট দেখুন। এই প্রজেক্টগুলো আমার দক্ষতা এবং অভিজ্ঞতা প্রদর্শন করে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden border border-gray-200">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  বিস্তারিত দেখুন
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">
            সব প্রজেক্ট দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
