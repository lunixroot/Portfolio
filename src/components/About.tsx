import React from "react";

const About: React.FC = () => {
  return (
      <div className="bg-gradient-to-br from-zinc-800 to-purple-50">
    <section id="about" className=" py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white relative">
        About Me
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400 rounded"></span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-white">
            I'm a passionate frontend developer focused on building responsive
            and accessible web applications. With a keen eye for design and a
            love for clean, efficient code, I create digital experiences that
            delight users and drive business results.
          </p>
          <p className="text-lg leading-relaxed text-white">
            I specialize in modern web technologies and enjoy staying
            up-to-date with the latest trends in frontend development. When
            I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or enjoying the great
            outdoors.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">React</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">CSS3</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">Git</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">GitHub</span>
            <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">Responsive Design</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/adarsh.svg" alt="Profile" className="w-100 h-100" />
        </div>
      </div>
    </section>
      </div>
  );
};

export default About;
