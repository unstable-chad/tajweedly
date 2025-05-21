import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useIsMd } from "@/hooks/useIsScreenSize";
import QuranIcon from "../assets/icons/tajweedly-icon.webp";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import CoolSeparationBorder from "../assets/icons/separation-design.svg?react";

import ContactForm from "@/components/ContactForm";
import FreeTrialForm from "@/components/FreeTrialForm";

const ContactUs = () => {
  // state
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isMd = useIsMd();
  const ADiv = motion.div;

  // refs
  const contactBannerRef = useRef(null);
  const contactImgRef = useRef(null);
  const freeTrialApplyTextRef = useRef(null);

  // in view
  const isInViewContactBanner = useInView(contactBannerRef, {
    once: true,
    amount: 0.6,
  });
  const isInViewContactImg = useInView(contactImgRef, {
    once: true,
    amount: 0.4,
  });
  const isInViewFreeTrialApplyText = useInView(freeTrialApplyTextRef, {
    once: true,
    amount: 0.7,
  });

  // animation variants
  const contactUsDiv = {
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
  const contactUsDivChild = {
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
      },
    },
  };
  const contactBanner = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };
  const freeTrialApplyTextDiv = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const formSubmittedDiv = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.3 },
    },
  };

  // handlers
  const handleTrialFormSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="pb-15">
      <AnimatePresence>
        {formSubmitted && (
          <ADiv
            className="w-full fixed top-10 z-50 flex justify-center items-center"
            variants={formSubmittedDiv}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ADiv className=" bg-gold text-white font-bold py-3 px-6 rounded-xl w-fit mx-auto text-md md:text-lg xl:text-xl">
              Request submitted successfully!
            </ADiv>
          </ADiv>
        )}
      </AnimatePresence>
      <ADiv className="w-full md:flex  filter contrast-85">
        <ADiv
          className="flex-1 flex justify-center items-center flex-col pb-30 md:pb-0 py-10  md:py-0 relative amber-color-gradient bg-gradient-to-r"
          variants={contactUsDiv}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-playfair font-bold text-fluid-md  rounded-tr-2xl rounded-tl-2xl"
            variants={contactUsDivChild}
          >
            Contact Us
          </motion.p>
          <ADiv variants={contactUsDivChild}>
            <CoolSeparationBorder className="lg:w-100 w-60 sm:w-80 2xl:w-125" />
          </ADiv>
          <ADiv
            className="flex justify-center items-center  rounded-2xl  p-3"
            variants={contactUsDivChild}
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
            className="text-fluid-xs font-inter text-center absolute bottom-6 mx-10 outline-2 rounded-lg outline-offset-4 bg-clip-border"
            variants={contactUsDivChild}
          >
            If you have any questions or need any kind of information please use
            any of the methods below to contact us, we will be very happy to
            respond to you
          </motion.p>
        </ADiv>
        <ADiv
          className="flex-1 flex justify-center items-center flex-col "
          variants={imgDiv}
          initial="hidden"
          animate="visible"
        >
          <ADiv className=" flex justify-center items-center">
            <img
              src="/images/medium-shot-islamic-woman-lifestyle.webp"
              alt=""
              className=""
            />
          </ADiv>
        </ADiv>
      </ADiv>
      <ADiv
        className="flex flex-col md:flex-row bg-gold py-8 text-inter text-white gap-8 justify-around  items-start my-10"
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
      <ADiv className="flex mx-5 md:m-15   ">
        <ADiv className="w-full h-full">
          <ContactForm onSubmit={handleTrialFormSubmit} />
        </ADiv>
        <ADiv
          className=" hidden md:block "
          initial={{ opacity: 0, y: 300 }}
          animate={
            isInViewContactImg ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }
          }
          transition={{ duration: 0.3 }}
        >
          <img
            ref={contactImgRef}
            src="/images/contact-img.webp"
            alt=""
            className="object-cover w-11/12"
          />
        </ADiv>
      </ADiv>
      <ADiv className="flex justify-center  items-center flex-col sm:flex-row md:gap-25 gap-15 my-10 sm:mx-5 lg:mx-20 mx-0">
        <ADiv
          className="flex flex-1 flex-col  text-gold w-4/5 sm:w-full peer"
          ref={freeTrialApplyTextRef}
          variants={freeTrialApplyTextDiv}
          initial="hidden"
          animate={isInViewFreeTrialApplyText ? "visible" : "hidden"}
        >
          <p className="font-bold text-4xl">WANT A FREE TRIAL SESSION?</p>
          <br />
          <p className="font-bold text-6xl">APPLY NOW!</p>
        </ADiv>
        <ADiv className="flex-1 w-4/5 sm:w-full pulse-on-hover transition-all ">
          <FreeTrialForm onSubmit={handleTrialFormSubmit} />
        </ADiv>
      </ADiv>
    </div>
  );
};

export default ContactUs;
