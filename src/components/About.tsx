import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    gsap.to(".scrollbanner--1", {
      transform: "translate3d(0%, 50px, 20px) rotateZ(6.0deg)",
      width: "140%",
      scrollTrigger: {
        trigger: ".r--box",
        start: "top 40%",
        end: "top -10%",
        // markers: true,
        scrub: 1,
      },
    });

    gsap.to(".scrollbanner--2", {
      transform: "translate3d(0%, 0px, 0px) rotateZ(-6.0deg)",
    });

    gsap.to(".scrollbanner--2", {
      transform: "translate3d(0%, -50px, 20px) rotateZ(-6.0deg)",
      width: "120%",
      delay: 5,
      scrollTrigger: {
        trigger: ".r--box",
        start: "top 35%",
        end: "top -10%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="r--box relative overflow-hidden bg-gradient-to-br from-zinc-800 to-purple-50">

      <div className="absolute inset-0 z-0 font-poppins">
        <div className="scrollbanner--1 text-xl flex justify-start items-center w-0 absolute top-[40%] left-[-30%] rotate-[8deg] overflow-hidden" style={{ backgroundImage: 'linear-gradient(90deg, #afa8ff,#9d95ff, #9d95ff, #262626)' }}>

          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
          </div>
          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
          </div>
          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
            <div className="medium p-4">React Developer</div>
            <div className="medium p-4">TypeScript Expert</div>
            <div className="medium p-4">UI/UX Designer</div>
            <div className="medium p-4">Frontend Specialist</div>
          </div>
        </div>

        <div className="scrollbanner--2 text-xl flex justify-start items-center w-0 absolute bottom-[30%] left-[-1%] rotate-[-8deg] overflow-hidden" style={{ backgroundImage: 'linear-gradient(90deg, #afa8ff,#9d95ff, #9d95ff, #262626)' }}>

          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
          </div>
          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
          </div>
          <div className="scrollbar flex flex-none items-center animate-scroll">
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
            <div className="medium p-4">JavaScript</div>
            <div className="medium p-4">Tailwind CSS</div>
            <div className="medium p-4">Node.js</div>
            <div className="medium p-4">Git & GitHub</div>
          </div>
        </div>
      </div>
      <section id="about" className="relative z-10 py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white relative">
          About Me
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400 rounded"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              I'm a passionate frontend developer focused on building responsive
              and accessible web applications. With a keen eye for design and a
              love for clean, efficient code, I create digital experiences that
              delight users and drive business results.
            </p>
            <p className="text-lg leading-relaxed mix-blend-mode-difference text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              I specialize in modern web technologies and enjoy staying
              up-to-date with the latest trends in frontend development. When
              I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying the great
              outdoors.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                React
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                TypeScript
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                JavaScript
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                Tailwind CSS
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                CSS3
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                HTML5
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                Node.js
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                Git
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                GitHub
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium p-4">
                Responsive Design
              </span>
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
