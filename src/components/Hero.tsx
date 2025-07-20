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
        className="min-h-[90vh] flex flex-col responsive justify-center items-center text-white text-center p-8 bg-black"
      >
        {/* <div className="absolute -top-40 left-[60vh] w-full h-screen z-0 border border-transparent rounded-full">
          <div className=" bg-[#B200CE] blur-[80px] opacity-1 rounded-full z-10 w-[40vw] h-[22vw]"></div>
        </div> */}
        {/* <div className="absolute top-0 left-0 bg-[#B200CE] blur-3xl opacity-1 rounded-full z-10 w-[30vw] h-[20vw]"></div> */}
        <div
          ref={blur1}
          className="absolute -top-[25vh] left-100 bg-[#fb00ff] blur-[100px] opacity-1 rounded-full z-10 w-[40vw] h-[22vw]"
        ></div>

        <div
          ref={blur2}
          className="absolute -top-20 left-[49vh] bg-[#6800AD] blur-[80px] opacity-1 rounded-full z-10 w-[20vw] h-[10vw]"
        ></div>

        <div className="overflow-hidden">
          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl font-bold px-2 mb-6 text-transparent bg-clip-text [background-image:linear-gradient(180deg,#ffffff_5%,#B200CE_50%,#5A03CC_85%)] "
          >
            {/* bg-gradient-to-b from-white via-[#B200CE] to-[#5A03CC] */}
            Hi, I'm Adarsh Thakur
          </h1>
        </div>
        <div className="overflow-hidden">
          <p
            ref={pRef}
            className="text-xl md:text-xl font-thin  mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Front-End developer specializing in React, JavaScript, and creating web magic. ✨ <br />
            Code enthusiast by day, UI/UX perfectionist by night - creating digital experiences that wow.
          </p>
        </div>
        <div className="overflow-hidden">
          <a
            ref={buttonRef}
            href="#projects"
            className="inline-block px-8 py-4 bg-[#B200CE] text-white font-semibold rounded-lg hover:bg-[#c83dff]  transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
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

        <div className=" absolute bottom-20">
          <h2 className="text-4xl md:text-5xl mb-2 font-mono text-center text-zinc-700 relative">
            Code, without the hassle
          </h2>
          <span className="text-sm md:text-lg text-center font-thin text-zinc-500 relative hover:text-zinc-300">
            <a href="#about">
              scroll down ⇣
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
