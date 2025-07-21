import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const blur1 = useRef<HTMLDivElement>(null);
  const blur2 = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const buttonReff = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h1Element = h1Ref.current;
    const blurel1 = blur1.current;
    const blurel2 = blur2.current;
    const pElement = pRef.current;
    const buttonElement = buttonRef.current;
    const shadowElement = buttonReff.current;

    // Create timeline for blur animations
    const blurTl = gsap.timeline();
    blurTl
      .to(blurel1, {
        scale: 1.09,
        duration: 2,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1,
        height: "40vh",
        backgroundColor: "#c83dff",
      })
      .to(
        blurel2,
        {
          scale: 1.09,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          backgroundColor: "#fb00ff",
        },
        "+=0.95"
      ); // Start 0.5 seconds after the first animation begins

    if (h1Element && pElement && buttonElement) {
      gsap.set([h1Element, pElement, buttonElement], {
        opacity: 0,
        y: 100,
      });

      if (shadowElement) {
        gsap.set(shadowElement, {
          opacity: 0,
          y: -40,
        });
        const tl = gsap.timeline();

        tl.to(
          shadowElement,
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.out",
          },
          "=3"
        );
      }

      const tl = gsap.timeline();
      tl.to(h1Element, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
      })

        // tl.to(h1Element, {
        //   opacity: 1,
        //   y: 0,
        //   duration: 1,
        //   ease: "power3.out"
        // })
        .to(
          pElement,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          buttonElement,
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.out",
          },
          "-=1.8"
        );

      gsap.to(h1Element, {
        scale: 1.02,
        duration: 2,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1,
      });

      // gsap.to(blurel1, {
      //   scale: 1.02,
      //   duration: 2,
      //   ease: "power3.inOut",
      //   yoyo: true,
      //   repeat: -1,
      // });
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex flex-col responsive justify-center items-center text-white text-center p-4 sm:p-8 bg-black relative overflow-hidden"
      >
        
        <div
          ref={blur1}
          className="absolute -top-[24vh] sm:-top-[18vh] md:-top-[25vh] left-[26vw] sm:left-[26vw] md:left-[30vw] bg-[#fb00ff] blur-[40px] sm:blur-[60px] md:blur-[100px] opacity-50 sm:opacity-70 md:opacity-100 rounded-full z-10 w-[50vw] sm:w-[45vw] md:w-[40vw] h-[25vw] sm:h-[25vw] md:h-[22vw]"
        ></div>

        <div
          ref={blur2}
          className="absolute -top-[0vh] sm:-top-[10vh] md:-top-[15vh] left-[0vw] sm:left-[10vw] md:left-[20vw] bg-[#6800AD] blur-[30px] sm:blur-[50px] md:blur-[80px] opacity-50 sm:opacity-70 md:opacity-100 rounded-full z-10 w-[25vw] sm:w-[22vw] md:w-[20vw] h-[12vw] sm:h-[11vw] md:h-[10vw]"
        ></div>

        <div className="overflow-hidden relative z-20 w-full">
          <h1
            ref={h1Ref}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2 mb-4 sm:mb-6 text-transparent bg-clip-text [background-image:linear-gradient(180deg,#ffffff_5%,#B200CE_50%,#5A03CC_85%)] max-w-[95vw] mx-auto"
          >
            {/* bg-gradient-to-b from-white via-[#B200CE] to-[#5A03CC] */}
            Hi, I'm Adarsh Thakur
          </h1>
        </div>
        <div className="overflow-hidden relative z-20 w-full">
          <p
            ref={pRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-thin mb-6 sm:mb-8 max-w-[90vw] sm:max-w-[80vw] md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Front-End developer specializing in React, JavaScript, and creating web magic. ✨ 
            <br className="hidden md:block" />
            <span className="block md:inline mt-2 md:mt-0">Code enthusiast by day, UI/UX perfectionist by night - creating digital experiences that wow.</span>
          </p>
        </div>
        <div className="overflow-hidden relative z-20 w-full">
          <a
            ref={buttonRef}
            href="#projects"
            className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#B200CE] text-white font-semibold rounded-lg hover:bg-[#c83dff] transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
          >
            View My Work
          </a>
        </div>
        <div
          ref={buttonReff}
          className="relative z-0 border border-transparent rounded-md"
        >
          <div className="absolute -left-20 -inset-1 bg-[#B200CE] blur-lg opacity-60 rounded-md -z-10 w-40 h-10"></div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-[90vw]">
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl mb-2 font-mono text-center text-zinc-700 relative px-2 sm:px-4">
            Code, without the hassle
          </h2>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-center font-thin text-zinc-500 relative hover:text-zinc-300 block">
            <a href="#about" className="inline-block">
              scroll down ⇣
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
