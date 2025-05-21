import { motion, useInView } from "framer-motion";
import { useIs2xl, useIsMd } from "@/hooks/useIsScreenSize";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

//   data
const quranCourses = [
  {
    title: "Online Quran Classes for Kids",
    description:
      "Our specially designed Quran course for kids helps children start their Quranic journey with Tajweed. Guided by expert tutors experienced in teaching young learners, children will learn to recite the Quran with correct pronunciation and proper Arabic accent.",
  },
  {
    title: "Quran Course for Beginners",
    description:
      "This foundational course is ideal for those starting from scratch. Students will learn to read the Quran fluently and accurately while applying the essential rules of Tajweed, ensuring a correct and confident recitation.",
  },
  {
    title: "Female Quran Teachers for Sisters and Kids",
    description:
      "We offer certified female Quran tutors available 24/7 to accommodate flexible learning schedules for women and children. Learn Quran and Arabic with comfort and ease, at a time that works best for you.",
  },
  {
    title: "Online Quran Memorization (Hifz Course)",
    description:
      "Our intensive Quran memorization program is tailored for both children and adults. With the support of professional male and female teachers, students can efficiently memorize the Quran under expert supervision and guidance.",
  },
  {
    title: "Learn Quran Online with Tajweed",
    description:
      "Proper recitation of the Quran requires correct application of Tajweed rules. Our qualified teachers—many of whom hold Ijaaza certifications—provide structured online Tajweed and Qirat lessons to help students recite the Quran as it was revealed.",
  },
  {
    title: "Online Quran Classes for Special Needs",
    description:
      "We offer compassionate and skilled instruction for children with special learning needs. Our teachers use engaging and effective methods to ensure every child, regardless of learning pace, can enjoy and benefit from Quran education.",
  },
];

const Home = () => {
  const isMd = useIsMd();
  const is2xl = useIs2xl();
  const ADiv = motion.create("div");
  const coursesRef = useRef(null);
  const bookSessionBannerRef = useRef(null);

  const isInViewCourses = useInView(coursesRef, {
    once: true,
    amount: 0.5,
  });
  const isInViewbookSessionBanner = useInView(bookSessionBannerRef, {
    once: true,
    amount: 0.7,
  });

  // states

  // animation variants
  const quranImgSm = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  const quranImgMd = {
    hidden: {
      scale: 2,
      x: "50%",
      y: is2xl ? "10%" : "40%",
    },
    visible: {
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        scale: { duration: 1, delay: 0.5 },
        x: { duration: 1, delay: 1.5 },
        y: { duration: 1, delay: 1.5 },
      },
    },
  };
  const firstText = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: isMd ? 3 : 2 },
    },
  };

  const contactBanner = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: isMd ? 3.5 : 2.5 },
    },
  };

  const quranCoursesVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const quranCourseVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const bookSessionBanner = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  // hooks

  return (
    <>
      <ADiv className="pb-15">
        <ADiv className="flex flex-col md:flex-row ">
          <ADiv
            key={isMd ? "md" : "sm"}
            className="flex justify-center"
            variants={isMd ? quranImgMd : quranImgSm}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/images/quran_webp.webp"
              alt="Background"
              className="w-3/5 md:w-4/5   "
            />
          </ADiv>
          <ADiv
            className="  items-center flex-col flex justify-center p-10 font-inter"
            variants={firstText}
            initial="hidden"
            animate="visible"
          >
            <p className="text-fluid-lg text-center ">
              Learn Quran with Tajweed
            </p>
            <p className="text-fluid-base text-center">
              Empower your child to recite the Quran with confidence and
              clarity. Our Tajweed program is designed for kids around the
              world, providing them with the essential skills and knowledge to
              pronounce each word correctly and develop a lifelong love for the
              sacred text.
            </p>
          </ADiv>
        </ADiv>

        <ADiv
          className="flex flex-col md:flex-row bg-gold py-8 text-inter text-white gap-8 justify-around  items-start "
          variants={contactBanner}
          initial="hidden"
          animate="visible"
        >
          <ADiv className="flex gap-4 items-center ms-14 md:ms-0">
            <div>
              <PhoneIcon className="icon-w-fluid-page" />
            </div>
            <div>
              <p className=" font-normal  text-2xl ">Call us now!</p>
              <p className=" font-semibold text-lg">+44 0000 000000</p>
            </div>
          </ADiv>
          <ADiv className="flex gap-4 items-center  ms-14 md:ms-0">
            <div>
              <FaWhatsapp className="icon-w-fluid-page" />
            </div>
            <div>
              <p className=" font-normal text-2xl">WhatsApp us!</p>
              <p className=" font-semibold text-lg">+44 0000 000000</p>
            </div>
          </ADiv>
          <ADiv className="flex gap-4 items-center  ms-14 md:ms-0">
            <div>
              <EnvelopeIcon className="icon-w-fluid-page" />
            </div>
            <div>
              <p className=" font-normal text-2xl">Email us!</p>
              <p className=" font-semibold text-lg">demo@tajweedly.fake</p>
            </div>
          </ADiv>
        </ADiv>
        <ADiv
          className=" mt-9 grid grid-cols-1 md:grid-cols-3 gap-x-15 gap-y-10 mx-13"
          variants={quranCoursesVariant}
          initial="hidden"
          animate={isInViewCourses ? "visible" : "hidden"}
          ref={coursesRef}
        >
          {quranCourses.map((course, index) => (
            <ADiv
              key={index}
              className="flex flex-col gap-3"
              variants={quranCourseVariant}
            >
              <p className=" font-semibold font-playfair text-2xl">
                {course.title}
              </p>
              <p className="font-inter font-medium text-md">
                {course.description}
              </p>
            </ADiv>
          ))}
        </ADiv>
        <ADiv
          className="flex  bg-gold py-8 mt-8 text-inter text-white gap-8 justify-around  items-start "
          variants={bookSessionBanner}
          initial="hidden"
          animate={isInViewbookSessionBanner ? "visible" : "hidden"}
          ref={bookSessionBannerRef}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-inter font-semibold text-2xl ">
              Book a free session!
            </p>
            <p>number link</p>
          </div>
        </ADiv>
      </ADiv>
    </>
  );
};

export default Home;
