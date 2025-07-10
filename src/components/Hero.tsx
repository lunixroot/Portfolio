import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const h1Element = h1Ref.current;
    const pElement = pRef.current;
    const buttonElement = buttonRef.current;

    if (h1Element && pElement && buttonElement) {

      gsap.set([h1Element, pElement, buttonElement], {
        opacity: 0,
        y: 100
      });

      const tl = gsap.timeline();
      tl.to(h1Element,{
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out"
      })

      // tl.to(h1Element, {
      //   opacity: 1,
      //   y: 0,
      //   duration: 1,
      //   ease: "power3.out"
      // })
      .to(pElement, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4") 
      .to(buttonElement, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out"
      }, "-=1.8"); 

      gsap.to(h1Element, {
        scale: 1.02,
        duration: 2,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (<>

    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-white text-center p-8 bg-zinc-800"
    >
      <div className="overflow-hidden">
      <h1 
        ref={h1Ref}
        className="text-5xl md:text-6xl font-bold px-2 mb-6"
      >
        Hi, I'm Adarsh Thakur
      </h1>
      </div>
      <div className="overflow-hidden">
      <p 
        ref={pRef}
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        A passionate Frontend Developer crafting beautiful and functional web experiences
      </p>
      </div>
      <div className="overflow-hidden">
      <a 
        ref={buttonRef}
        href="#projects" 
        className="inline-block px-8 py-4 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300  transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        View My Work
      </a>
      </div>
    </section>
    </>
  );
};

export default Hero;
