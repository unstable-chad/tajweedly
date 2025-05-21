import { motion, useInView } from "framer-motion";
import { useIsMd } from "@/hooks/useIsScreenSize";
import { useRef } from "react";

const AboutUs = () => {
  // states

  // others mix
  const ADiv = motion.div;
  const isMd = useIsMd();
  const overlayParaDiv1Ref = useRef(null);
  const overlayParaDiv2Ref = useRef(null);
  const visionDivRef = useRef(null);
  const teamDivRef = useRef(null);
  const visionSvgRef = useRef(null);
  const teamSvgRef = useRef(null);
  const joinUsDivRef = useRef(null);
  const joinUsSvgRef = useRef(null);

  // inView?
  const overlayParaDiv1InView = useInView(overlayParaDiv1Ref, {
    once: true,
    amount: 0.5,
    enable: !isMd,
  });
  const overlayParaDiv2InView = useInView(overlayParaDiv2Ref, {
    once: true,
    amount: 0.5,
    enable: !isMd,
  });
  const visionInView = useInView(visionDivRef, {
    once: true,
    amount: 0.2,
    enable: !isMd,
  });
  const teamInView = useInView(teamDivRef, {
    once: true,
    amount: 0.2,
    enable: !isMd,
  });
  const joinUsInView = useInView(joinUsDivRef, {
    once: true,
    amount: 0.2,
    enable: !isMd,
  });
  const visionSvgInView = useInView(visionSvgRef, {
    once: true,
    amount: 0.2,
    enable: !isMd,
  });
  const teamSvgInView = useInView(teamSvgRef, {
    once: true,
    amount: 0.2,
    enable: !isMd,
  });
  const joinUsSvgInView = useInView(joinUsSvgRef, {
    once: true,
    amount: 0.2,
  });

  // variants

  const overlayParaDiv1 = {
    hidden: isMd ? { opacity: 0.2, scale: 0.5, rotateY: 90 } : {},
    visible: isMd
      ? (custom = {}) => ({
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.3,
            delay: custom.delay || 0,
          },
        })
      : {},
  };
  const overlayPara1 = {
    hidden: isMd
      ? {
          opacity: 0,
          x: 200,
          transition: {
            duration: 1,
          },
        }
      : (custom = {}) => ({
          opacity: 0.2,
          scale: 0.5,
          x: custom.x,
          y: custom.y,
        }),
    visible: isMd
      ? {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeInOut",
          },
        }
      : { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.3 } },
  };
  const last3Divs = {
    hidden: isMd
      ? {
          transition: {
            duration: 1,
            when: "beforeChildren",
          },
        }
      : {},
    visible: isMd ? {} : {},
  };

  const last3DivsSvg = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const last3DivsSvgPath = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // hooks
  return (
    <div>
      <ADiv className="relative w-full " style={{ perspective: "3000px" }}>
        <img
          src="./images/muslims-reading-from-quran.webp"
          alt="Muslims reading from Quran"
          className="w-full md:min-h-screen"
        ></img>
        <ADiv
          className="md:absolute md:top-20 md:left-20 amber-color-gradient bg-gradient-to-r  md:rounded-3xl md:w-3/5 md:p-8 p-6 justify-center items-center w-full"
          variants={overlayParaDiv1}
          ref={overlayParaDiv1Ref}
          initial="hidden"
          animate={overlayParaDiv1InView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-justify font-inter mb-2"
            variants={overlayPara1}
            custom={{ x: 150 }}
          >
            At Quran Academy, we are dedicated to empowering learners of all
            ages and backgrounds to deepen their understanding and connection
            with the Holy Quran through immersive, accessible, and expertly
            guided digital experiences.
          </motion.p>

          <motion.p
            className={`text-justify font-inter mb-2 ${isMd ? "" : "hidden"}`}
            variants={overlayPara1}
            custom={{ x: 150 }}
          >
            Combining cutting-edge technology with time-honored pedagogical
            methods, our app brings world-class Quranic instruction straight to
            your fingertips, whether you're a complete beginner or aiming to
            perfect your recitation and memorization.
          </motion.p>

          <motion.p
            className="text-justify font-inter"
            variants={overlayPara1}
            custom={{ x: 150 }}
          >
            Guided by certified scholars and experienced Qaris, we've designed
            each lesson to be engaging, interactive, and tailored to your
            individual pace.
          </motion.p>
        </ADiv>
        <ADiv
          className="md:absolute md:top-100 md:right-20  amber-color-gradient bg-gradient-to-r  md:rounded-3xl md:w-3/5 md:p-8 p-6  justify-center items-center w-full"
          ref={overlayParaDiv2Ref}
          variants={overlayParaDiv1}
          custom={{ delay: 1.9 }}
          initial="hidden"
          animate={overlayParaDiv2InView ? "visible" : "hidden"}
        >
          <motion.p
            className=" font-bold text-2xl mb-2 text-center lg:text-start"
            variants={overlayPara1}
            custom={{ x: -150 }}
          >
            Our Mission
          </motion.p>

          <motion.p
            className="text-justify font-inter mb-2"
            variants={overlayPara1}
            custom={{ x: -150 }}
          >
            <span className="font-bold text-lg">Illuminate Every Heart: </span>{" "}
            <span>
              We strive to make the Quran's timeless guidance accessible to
              everyone, everywhere—bridging geographical, linguistic, and
              cultural gaps so that the words of Allah SWT can resonate in every
              home.
            </span>
          </motion.p>

          <motion.p
            className="text-justify font-inter"
            variants={overlayPara1}
            custom={{ x: -150 }}
          >
            <span className="font-bold text-lg">
              Nurture Lifelong Learners:{" "}
            </span>{" "}
            <span>
              By offering personalized learning paths, progress-tracking
              dashboards, and regular assessments, we aim to foster a continuous
              journey of growth and spiritual enrichment.
            </span>
          </motion.p>
        </ADiv>
        <ADiv
          className="relative  sm:bg-transparent max-sm:bg-gradient-to-r amber-color-gradient "
          ref={visionDivRef}
          variants={last3Divs}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
        >
          <motion.svg
            ref={visionSvgRef}
            variants={last3DivsSvg}
            initial="hidden"
            animate={visionSvgInView ? "visible" : "hidden"}
            viewBox={isMd ? "0 -35 150 75" : "0 -35 100 70"}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto sm:block hidden "
          >
            <motion.defs>
              <motion.linearGradient
                id="joinUsGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fcd34d" />
              </motion.linearGradient>
            </motion.defs>
            <motion.path
              d="m.029-29.943V29.993L60.063 15.013C89.925 4.869 89.697-5.388 59.949-14.848Z"
              fill="url(#joinUsGradient)"
              stroke="url(#joinUsGradient)"
              strokeWidth={2}
              variants={last3DivsSvgPath}
              initial="initial"
              animate={visionSvgInView ? "visible" : "hidden"}
            />
          </motion.svg>

          <ADiv
            className={`sm:absolute relative sm:inset-0 h-full z-10 flex flex-col p-5 md:w-1/2 sm:w-3/4  sm:pt-0 justify-center items-center  text-center  py-10 `}
          >
            <motion.p
              className="font-bold md:text-2xl text-xl mb-2"
              variants={overlayPara1}
              custom={{ x: -150 }}
            >
              Our Vision
            </motion.p>
            <motion.p
              className=" sm:text-md md:text-lg"
              variants={overlayPara1}
              custom={{ x: -150 }}
            >
              Academy guides, supports, and celebrates your progress. Download
              the Android app on Google Play today to embark on a transformative
              journey of spiritual growth, knowledge, and closeness to Allah
              SWT.
            </motion.p>
          </ADiv>
        </ADiv>
        <ADiv
          ref={teamDivRef}
          className="relative  sm:bg-transparent max-sm:bg-gradient-to-r amber-color-gradient  sm:-mt-30 xl:-mt-60"
          variants={last3Divs}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
        >
          <motion.svg
            viewBox={isMd ? "0 -35 150 70" : "50 -35 100 70"}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto sm:block hidden "
            ref={teamSvgRef}
            variants={last3DivsSvg}
            initial="hidden"
            animate={teamSvgInView ? "visible" : "hidden"}
          >
            <motion.defs>
              <linearGradient
                id="joinUsGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fcd34d" />
              </linearGradient>
            </motion.defs>
            <g transform="translate(150, 0) scale(-1, 1)">
              <motion.path
                d="m.029-29.943V29.993L60.063 15.013C89.925 4.869 89.697-5.388 59.949-14.848Z"
                fill="url(#joinUsGradient)"
                stroke="url(#joinUsGradient)"
                strokeWidth={2}
                variants={last3DivsSvgPath}
                initial="initial"
                animate={teamSvgInView ? "visible" : "hidden"}
              />
            </g>
          </motion.svg>
          <ADiv
            className={`sm:absolute relative top-0 right-0 h-full z-10 flex flex-col p-5 md:w-1/2 sm:w-3/4  sm:pt-0 justify-center items-center  text-center  py-10 `}
          >
            <motion.p
              className="font-bold text-2xl "
              variants={overlayPara1}
              custom={{ y: -100 }}
            >
              Our Team
            </motion.p>
            <motion.p
              className=" "
              variants={overlayPara1}
              custom={{ y: -100 }}
            >
              Founded by dedicated Muslims and passionate educators, our team
              combines expertise in Islamic studies, educational psychology, and
              software development. From visionary entrepreneurs to committed
              support staff, each member shares a unified mission: to serve the
              Ummah by effectively and accessibly sharing the Quran's light.
            </motion.p>
          </ADiv>
        </ADiv>
        <ADiv
          className="relative  sm:bg-transparent max-sm:bg-gradient-to-r amber-color-gradient sm:-mt-30 xl:-mt-60"
          ref={joinUsDivRef}
          variants={last3Divs}
          initial="hidden"
          animate={joinUsInView ? "visible" : "hidden"}
        >
          <motion.svg
            ref={joinUsSvgRef}
            variants={last3DivsSvg}
            initial="hidden"
            animate={joinUsSvgInView ? "visible" : "hidden"}
            viewBox={isMd ? "0 -35 150 75" : "0 -35 100 70"}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto sm:block hidden "
          >
            <motion.defs>
              <motion.linearGradient
                id="joinUsGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                // variants={svgGradient}
                // initial="hidden"
                // animate="visible"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fcd34d" />
              </motion.linearGradient>
            </motion.defs>
            <motion.path
              d="m.029-29.943V29.993L60.063 15.013C89.925 4.869 89.697-5.388 59.949-14.848Z"
              fill="url(#joinUsGradient)"
              stroke="url(#joinUsGradient)"
              strokeWidth={2}
              variants={last3DivsSvgPath}
              initial="hidden"
              animate={joinUsSvgInView ? "visible" : "hidden"}
            />
          </motion.svg>

          <ADiv
            className={`sm:absolute relative sm:inset-0 h-full z-10 flex flex-col p-5 md:w-1/2 sm:w-3/4  sm:pt-0 justify-center items-center  text-center  py-10 `}
            variants={last3Divs}
            initial="hidden"
            animate={joinUsInView ? "visible" : "hidden"}
          >
            <motion.p
              className="font-bold md:text-2xl text-xl mb-2"
              variants={overlayPara1}
              custom={{ y: 150 }}
            >
              Join Us
            </motion.p>
            <motion.p
              className=" sm:text-md md:text-lg"
              variants={overlayPara1}
              custom={{ y: 150 }}
            >
              Academy guides, supports, and celebrates your progress. Download
              the Android app on Google Play today to embark on a transformative
              journey of spiritual growth, knowledge, and closeness to Allah
              SWT.
            </motion.p>
          </ADiv>
        </ADiv>
      </ADiv>
      <div className="pb-15 sm:pb-0 max-sm:amber-color-gradient "></div>
    </div>
  );
};

export default AboutUs;
