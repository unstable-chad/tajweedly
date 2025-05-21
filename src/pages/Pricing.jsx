import { motion, useInView } from "framer-motion";
import QuranIcon from "../assets/icons/tajweedly-icon.webp";
import CoolSeparationBorder from "../assets/icons/separation-design.svg?react";
import Mastercard from "../assets/icons/mastercard-full-svgrepo-com.svg?react";
import Visacard from "../assets/icons/visa-3-svgrepo-com.svg?react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

import { useIsMd } from "@/hooks/useIsScreenSize";

const Pricing = () => {
  const isMd = useIsMd();
  // state

  const ADiv = motion.create("div");

  // refs
  const pricePlansBannerRef = useRef(null);
  const courseBoxRef = useRef(null);
  const contactBannerRef = useRef(null);
  const paymentCardsDivRef = useRef(null);

  // in view
  const isInViewpricePlansBanner = useInView(pricePlansBannerRef, {
    once: true,
    amount: isMd ? 0.6 : 0.3,
  });

  const isInViewCourseBox = useInView(courseBoxRef, {
    once: true,
    amount: isMd ? 0.6 : 0.3,
  });

  const isInViewContactBanner = useInView(contactBannerRef, {
    once: true,
    amount: isMd ? 0.6 : 0.3,
  });

  const isInViewPaymentCardsDiv = useInView(paymentCardsDivRef, {
    once: true,
    amount: isMd ? 0.6 : 0.3,
  });
  // animation variants
  const packagesFeeDiv = {
    hidden: { x: -500 },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const packagesFeeDivChild = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  const imgDiv = {
    hidden: isMd ? { x: 1000 } : { y: 500 },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.7,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const imgDivChild = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  const pricePlansBanner = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };
  const courseBox = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const courseCard = {
    hidden: { opacity: 0, y: 150, scale: 0.4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };
  const contactBanner = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };
  const paymentCards = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // handlers
  const handleClick = () => {
    window.open("https://wa.me/+923070448272", "_blank");
  };
  return (
    <div className="pb-20">
      <ADiv className="w-full md:flex  filter contrast-85">
        <ADiv
          className="flex-1 flex justify-center items-center flex-col  md:pb-0 py-10  md:py-0 relative amber-color-gradient bg-gradient-to-r pb-30"
          variants={packagesFeeDiv}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-playfair font-bold text-fluid-md  rounded-tr-2xl rounded-tl-2xl"
            variants={packagesFeeDivChild}
          >
            Packages & Fee
          </motion.p>
          <ADiv variants={packagesFeeDivChild}>
            <CoolSeparationBorder className="lg:w-100 w-60 sm:w-80 2xl:w-125" />
          </ADiv>
          <ADiv
            className="flex justify-center items-center  rounded-2xl  p-3"
            variants={packagesFeeDivChild}
          >
            <img
              src={QuranIcon}
              alt="Quran Icon"
              className="icon-w-fluid-nav xl:mt-1 2xl:mt-2"
            />
            <motion.p className="text-fluid-base font-inter">
              Tajweedly
            </motion.p>
          </ADiv>

          <motion.p
            className="text-fluid-xs font-inter text-center absolute bottom-6 mx-10 outline-2 rounded-lg outline-offset-4 bg-clip-border "
            variants={packagesFeeDivChild}
          >
            If you have any questions or need any kind of information please use
            any of the method to contact us, we will be very happy to respond to
            you
          </motion.p>
        </ADiv>
        <ADiv
          className="flex-1 flex justify-center items-center flex-col mx-4 md:mx-0 pt-10 md:pt-0 gap-5 md:bg-[rgba(235,215,175,0.85)] pb-10"
          variants={imgDiv}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            className="object-cover  md:block hidden"
            src="/images/kid-knowledge.webp"
            alt="Knowledge"
          />
          <motion.p
            className="font-bold text-2xl text-olive text-fluid-md text-center mt-8"
            variants={imgDivChild}
          >
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
          </motion.p>
          <motion.p
            className="text-fluid-base font-inter text-olive text-center  italic "
            variants={imgDivChild}
          >
            <span className="block md:hidden">
              Seeking knowledge is an obligation upon every Muslim.
            </span>
            <span className="text-fluid-xs">(Sunan Ibn Majah 224)</span>
          </motion.p>
        </ADiv>
      </ADiv>
      <ADiv
        className="text-fluid-lg font-playfair text-center md:mt-20 mt-10 md:mb-15 mb-10 w-full bg-main text-white py-2"
        ref={pricePlansBannerRef}
        variants={pricePlansBanner}
        initial="hidden"
        animate={isInViewpricePlansBanner ? "visible" : "hidden"}
      >
        <motion.p>Monthly Price Plans</motion.p>
      </ADiv>
      <ADiv
        className="grid gap-10 md:grid-cols-2 2xl:grid-cols-4 px-10 sm:px-20 xl:px-30"
        ref={courseBoxRef}
        variants={courseBox}
        initial="hidden"
        animate={isInViewCourseBox ? "visible" : "hidden"}
      >
        <ADiv className="courses-card-div bg-white " variants={courseCard}>
          <ADiv className="bg-olive filter brightness-105 w-full py-5 text-center">
            <motion.p className="text-white font-semibold sm:text-xl xl:text-2xl text-lg">
              2 Days Weekly
            </motion.p>
          </ADiv>
          <motion.p className="text-fluid-md text-center mt-5 text-olive font-bold font-inter">
            £20
          </motion.p>
          <ADiv className="mt-5 xl:mt-8 ms-7 lg:ms-10 text-fluid-base flex flex-col gap-3">
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 8 Classes per Month
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> One on One Sessions
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 40 Minutes Live Class
            </motion.p>
          </ADiv>

          <ADiv className="bg-olive filter brightness-105 w-full py-3 text-center mt-12">
            <motion.button
              className="text-white font-semibold sm:text-xl xl:text-2xl text-lg active:brightness-90 active:scale-95 transition-all duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
              onClick={handleClick}
            >
              <FaWhatsapp className="text-2xl md:text-3xl" /> Book Now
            </motion.button>
          </ADiv>
        </ADiv>
        <ADiv className="courses-card-div bg-white" variants={courseCard}>
          <ADiv className="bg-olive filter brightness-105 w-full py-5 text-center">
            <motion.p className="text-white font-semibold sm:text-xl xl:text-2xl text-lg">
              Weekend Classes
            </motion.p>
          </ADiv>
          <motion.p className="text-fluid-md text-center mt-5 text-olive font-bold font-inter">
            £20
          </motion.p>
          <ADiv className="mt-5 xl:mt-8 ms-7 lg:ms-10 text-fluid-base flex flex-col gap-3">
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 8 Classes per Month
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> One on One Sessions
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 40 Minutes Live Class
            </motion.p>
          </ADiv>

          <ADiv className="bg-olive filter brightness-105 w-full py-3 text-center mt-12">
            <motion.button
              className="text-white font-semibold sm:text-xl xl:text-2xl text-lg active:brightness-90 active:scale-95 transition-all duration-300 ease-in-out inline-flex items-center gap-2  cursor-pointer"
              onClick={handleClick}
            >
              <FaWhatsapp className="text-2xl md:text-3xl" /> Book Now
            </motion.button>
          </ADiv>
        </ADiv>
        <ADiv className="courses-card-div bg-white" variants={courseCard}>
          <ADiv className="bg-olive filter brightness-105 w-full py-5 text-center">
            <motion.p className="text-white font-semibold sm:text-xl xl:text-2xl text-lg">
              3 Days Weekly
            </motion.p>
          </ADiv>
          <motion.p className="text-fluid-md text-center mt-5 text-olive font-bold font-inter">
            £25
          </motion.p>
          <ADiv className="mt-5 xl:mt-8 ms-7 lg:ms-10 text-fluid-base flex flex-col gap-3">
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 12 Classes per Month
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> One on One Sessions
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 40 Minutes Live Class
            </motion.p>
          </ADiv>

          <ADiv className="bg-olive filter brightness-105 w-full py-3 text-center mt-12">
            <motion.button
              className="text-white font-semibold sm:text-xl xl:text-2xl text-lg active:brightness-90 active:scale-95 transition-all duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
              onClick={handleClick}
            >
              <FaWhatsapp className="text-2xl md:text-3xl" /> Book Now
            </motion.button>
          </ADiv>
        </ADiv>
        <ADiv className="courses-card-div bg-white" variants={courseCard}>
          <ADiv className="bg-olive filter brightness-105 w-full py-5 text-center">
            <motion.p className="text-white font-semibold sm:text-xl xl:text-2xl text-lg">
              5 Days Weekly
            </motion.p>
          </ADiv>
          <motion.p className="text-fluid-md text-center mt-5 text-olive font-bold font-inter">
            £35
          </motion.p>
          <ADiv className="mt-5 xl:mt-8 ms-7 lg:ms-10 text-fluid-base flex flex-col gap-3">
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 20 Classes per Month
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> One on One Sessions
            </motion.p>
            <motion.p className="inline-flex items-center gap-4  text-olive font-semibold">
              <FaStar className=" text-olive" /> 40 Minutes Live Class
            </motion.p>
          </ADiv>

          <ADiv className="bg-olive filter brightness-105 w-full py-3 text-center mt-12">
            <motion.button
              className="text-white font-semibold sm:text-xl xl:text-2xl text-lg active:brightness-90 active:scale-95 transition-all duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
              onClick={handleClick}
            >
              <FaWhatsapp className="text-2xl md:text-3xl" /> Book Now
            </motion.button>
          </ADiv>
        </ADiv>
      </ADiv>
      <ADiv
        className="flex justify-evenly  flex-col md:flex-row mt-15 "
        ref={paymentCardsDivRef}
        variants={paymentCards}
        initial="hidden"
        animate={isInViewPaymentCardsDiv ? "visible" : "hidden"}
      >
        <ADiv className=" flex flex-col justify-center items-center md:border-b-2 border-main pb-10 px-10">
          <motion.p className="font-playfair font-bold text-fluid-md ">
            We Accept{" "}
          </motion.p>
          <ADiv className="flex justify-center items-center gap-10">
            <Mastercard className="w-[5rem] h-[5rem]" />
            <Visacard className="w-[5rem] h-[5rem]" />
          </ADiv>
        </ADiv>
        <ADiv className="hidden md:flex flex-col justify-center gap-3 border-b-2 border-main">
          <motion.p className="font-playfair font-bold text-fluid-md ">
            Popular Class Timings
          </motion.p>
          <ul className="list-disc pl-6 space-y-2 marker:text-gray-300">
            <li className="leading-6">
              Mon / Wed <span className="text-gray-600">4:00 - 5:00 PM</span>
            </li>
            <li className="leading-6">
              Tue / Thu <span className="text-gray-600">6:00 - 7:00 PM</span>
            </li>
          </ul>
        </ADiv>
      </ADiv>
      <ADiv
        className="flex flex-col md:flex-row bg-gold py-8 mt-20 text-inter text-white gap-8 justify-around  items-start "
        ref={contactBannerRef}
        variants={contactBanner}
        initial="hidden"
        animate={isInViewContactBanner ? "visible" : "hidden"}
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
    </div>
  );
};

export default Pricing;
