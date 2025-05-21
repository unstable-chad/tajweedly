import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FormBorders from "../assets/icons/form-borders.svg?react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ onSubmit }) => {
  // state
  const [contactUsdata, setContactUsData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);

  const ADiv = motion.create("div");

  // refs
  const contactUsFormRef = useRef(null);

  // in view
  const isInViewContactForm = useInView(contactUsFormRef, {
    once: true,
    amount: 0.3,
  });

  //  variants

  const contactFormDataDiv = {
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
  const contactFormDivChild = {
    hidden: (custom = {}) => ({
      opacity: 0,
      x: custom.x,
      y: custom.y,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  //   handlers
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/armaghan13579@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactUsdata),
        }
      );
      if (response.ok) {
        setContactUsData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        onSubmit();
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  return (
    <ADiv>
      <form onSubmit={handleSubmit} ref={contactUsFormRef}>
        <ADiv className="relative  bg-white  rounded-2xl contact-us-form-div-active ">
          <ADiv className="absolute z-10 -top-1 sm:-left-5 -left-4 2xl:-left-7 2xl:-top-2 ">
            <FormBorders className=" lg:w-30 w-20 sm:w-25 2xl:w-40 scale-x-[-1]" />
          </ADiv>
          <ADiv className="absolute z-10 -top-1 sm:-right-5 -right-4 2xl:-right-7 2xl:-top-2 ">
            <FormBorders className=" lg:w-30 w-20 sm:w-25 2xl:w-40 " />
          </ADiv>
          <ADiv className="absolute z-10 -bottom-1 sm:-left-5 -left-4 2xl:-left-7 2xl:-bottom-2 ">
            <FormBorders className=" lg:w-30 w-20 sm:w-25 2xl:w-40 scale-x-[-1] scale-y-[-1]" />
          </ADiv>
          <ADiv className="absolute z-10 -bottom-1 sm:-right-5 -right-4 2xl:-right-7 2xl:-bottom-2 ">
            <FormBorders className=" lg:w-30 w-20 sm:w-25 2xl:w-40 scale-y-[-1]" />
          </ADiv>
          <ADiv
            className="flex  flex-col p-10 xl:p-12 w-full justify-center items-center overflow-hidden"
            variants={contactFormDataDiv}
            initial="hidden"
            animate={isInViewContactForm ? "visible" : "hidden"}
          >
            <motion.p
              className="font-inter font-semibold text-fluid-md "
              variants={contactFormDivChild}
              custom={{ y: -100 }}
            >
              Contact Form
            </motion.p>
            <ADiv
              className="relative mt-12 w-full flex justify-center items-center"
              variants={contactFormDivChild}
              custom={{ y: 100 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                maxLength={50}
                value={contactUsdata.name}
                placeholder=" "
                className="peer  sm:w-5/6 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
                onChange={(e) =>
                  setContactUsData({
                    ...contactUsdata,
                    name: e.target.value,
                  })
                }
                required
              />
              <label
                htmlFor="name"
                className="absolute left-1/12 sm:left-1/10 -top-2.25 text-gray-500 transition-all -translate-y-1  scale-85 transform  origin-[0] peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 bg-white px-2 peer-focus:scale-85 peer-focus:text-gold peer-focus:font-medium font-semibold"
              >
                Full Name
              </label>
            </ADiv>
            <ADiv
              className="relative mt-10 w-full flex justify-center items-center"
              variants={contactFormDivChild}
              custom={{ y: 100 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                maxLength={35}
                value={contactUsdata.email}
                placeholder=" "
                className="peer  sm:w-5/6 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
                onChange={(e) =>
                  setContactUsData({
                    ...contactUsdata,
                    email: e.target.value,
                  })
                }
                required
              />
              <label
                htmlFor="email"
                className="absolute left-1/12 sm:left-1/10 -top-2.25 text-gray-500 transition-all -translate-y-1  scale-85 transform  origin-[0] peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 bg-white px-2 peer-focus:scale-85 peer-focus:text-gold peer-focus:font-medium font-semibold"
              >
                Email
              </label>
            </ADiv>
            <ADiv
              className="relative mt-10 w-full flex justify-center items-center"
              variants={contactFormDivChild}
              custom={{ y: 100 }}
            >
              <PhoneInput
                international
                defaultCountry="GB"
                countryCallingCodeEditable={false}
                withCountryCallingCode
                id="phone"
                name="phone"
                value={contactUsdata.phone}
                placeholder=" "
                className="peer  sm:w-5/6 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
                onChange={(value) =>
                  setContactUsData({
                    ...contactUsdata,
                    phone: value,
                  })
                }
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-1/12 sm:left-1/10 -top-2.25 text-gray-500 transition-all -translate-y-1  scale-85 transform  origin-[0] peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 bg-white px-2 peer-focus:scale-85 peer-focus:text-gold peer-focus:font-medium font-semibold"
              >
                Phone Number
              </label>
            </ADiv>
            <ADiv
              className="relative  mt-10 w-full flex justify-center items-center"
              variants={contactFormDivChild}
              custom={{ y: 100 }}
            >
              <textarea
                type="text"
                id="message"
                name="message"
                maxLength={20}
                value={contactUsdata.message}
                placeholder=" "
                className="peer sm:w-5/6 w-full resize-none h-40 xl:h-55  border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
                onChange={(e) =>
                  setContactUsData({
                    ...contactUsdata,
                    message: e.target.value,
                  })
                }
                required
              />
              <label
                htmlFor="message"
                className="absolute  left-1/12 sm:left-1/10 -top-2.25 text-gray-500 transition-all -translate-y-1  scale-85 transform  origin-[0] peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 bg-white px-2 peer-focus:scale-85 peer-focus:text-gold peer-focus:font-medium font-semibold"
              >
                Message
              </label>
            </ADiv>
            <motion.button
              type="submit"
              className={`mt-5 bg-gold xl:text-lg text-white ms-auto sm:me-12 me-8 xl:me-14 rounded-xl xl:px-6 xl:py-3 px-4 py-2 font-semibold hover:bg-gold/80 transition-all duration-300 ease-in-out  ${
                disabled
                  ? "brightness-85 filter cursor-not-allowed scale-95"
                  : "hover:scale-105 cursor-pointer"
              }`}
              variants={contactFormDivChild}
              custom={{ x: 200 }}
            >
              Submit
            </motion.button>
          </ADiv>
        </ADiv>
      </form>
    </ADiv>
  );
};

export default ContactForm;
