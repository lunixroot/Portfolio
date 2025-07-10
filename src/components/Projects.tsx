import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projectList = [
    { 
      title: 'WebPyrix', 
      description: 'a user-friendly web development platform that allows users to create and customize professional websites with ease. Utilized modern front-end and back-end technologies to ensure a responsive and dynamic user experience.',
      technologies: ['PHP', 'JavaScript', 'CSS3', 'HTML5', "GSAP"],
      liveUrl: 'https://webpyrix.com', 
      githubUrl: 'https://github.com/lunixroot' 
    },
    { 
      title: 'Hilltop Havens', 
      description: 'A luxury hotel booking platform for hill stations. Designed user interfaces, implemented responsive frontend, developed backend logic, integrated databases, and optimized code for better performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'GSAP'],
      liveUrl: 'https://www.hilltopladakh.com/',
      githubUrl: 'https://github.com/lunixroot' 
    },
    { 
      title: 'click2craft', 
      description: 'Developed a dynamic and interactive portfolio showcase that utilizes AJAX and jQuery for seamless content loading without page refresh. The project allows users to filter portfolio items based on categories.',
      technologies: ['HTML', "CSS", 'JavaScript', 'Bootstrap', 'Ajax', 'jQuery'],
      liveUrl: 'https://github.com/lunixroot/click2craft', 
      githubUrl: 'https://github.com/lunixroot' 
    },
    { 
      title: 'Password Management System', 
      description: 'Built a secure password manager with RReact and localStorage. Integrated basic encryption and full CRUD operations in one day. Optimized for usability, speed, and device compatibility.',
      technologies: ['React', 'tailwind CSS', 'MongoDB', 'LocalStorage'],
      liveUrl: 'https://github.com/lunixroot/BitLink', 
      githubUrl: 'https://github.com/yourusername/ecommerce-dashboard' 
    },
    { 
      title: 'BitLink', 
      description: 'BitLink is a modern, privacy-focused URL shortener built with Next.js 15 and MongoDB. It provides a clean, intuitive interface for creating short URLs without collecting user data.',
      technologies: ['React', 'Next.js', 'MongoDB', 'Node.js'],
      liveUrl: 'https://github.com/lunixroot/BitLink',
      githubUrl: 'https://github.com/yourusername/ecommerce-dashboard'
    }

  ];

  return (
    <section id="projects" className="py-20 px-8 max-w-full mx-auto bg-gradient-to-tr from-zinc-800 to-purple-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 relative">
        Projects
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400 rounded"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
        {projectList.map((proj, index) => (
          <ProjectCard 
            key={index} 
            title={proj.title} 
            description={proj.description}
            technologies={proj.technologies}
            liveUrl={proj.liveUrl}
            githubUrl={proj.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;