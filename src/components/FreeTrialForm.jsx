import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const FreeTrialForm = ({ onSubmit }) => {
  // state
  const [trialUserData, setTrialUserData] = useState({
    name: "",
    email: "",
  });
  const [disabled, setDisabled] = useState(false);

  const ADiv = motion.create("div");

  // refs
  const freeTrialFormRef = useRef(null);

  // in view
  const isInViewFreeTrialForm = useInView(freeTrialFormRef, {
    once: true,
    amount: 1,
  });

  // animation variants
  const freeTrialForm = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const freeTrialFormChild = {
    hidden: (custom = {}) => ({
      opacity: 0,
      x: custom.x,
      y: custom.y,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  // handlers
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
          body: JSON.stringify(trialUserData),
        }
      );
      if (response.ok) {
        setTrialUserData({
          name: "",
          email: "",
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
    <ADiv
      className=" p-6 rounded-xl shadow-lg bg-gold text-white overflow-hidden"
      ref={freeTrialFormRef}
      variants={freeTrialForm}
      initial="hidden"
      animate={isInViewFreeTrialForm ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        variants={freeTrialFormChild}
        custom={{ x: -100 }}
      >
        Start Your Free Trial
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <ADiv
          className="mb-4"
          variants={freeTrialFormChild}
          custom={{ x: -100 }}
        >
          <label className="block text-white mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={25}
            className="peer  bg-white text-black w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
            placeholder="Enter your name"
            required
            value={trialUserData.name}
            onChange={(e) =>
              setTrialUserData({ ...trialUserData, name: e.target.value })
            }
          />
        </ADiv>
        <ADiv
          className="mb-4"
          variants={freeTrialFormChild}
          custom={{ x: -100 }}
        >
          <label className="block text-white  mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="peer  bg-white text-black w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent"
            placeholder="Enter your email"
            value={trialUserData.email}
            onChange={(e) =>
              setTrialUserData({ ...trialUserData, email: e.target.value })
            }
            required
          />
        </ADiv>
        <motion.button
          type="submit"
          className={`mt-5 bg-white xl:text-lg text-black  ms-auto sm:me-12 me-8 xl:me-14 rounded-xl xl:px-6 xl:py-3 px-4 py-2 font-semibold  transition-all duration-300 ease-in-out  ${
            disabled
              ? "brightness-85 filter cursor-not-allowed scale-95"
              : "hover:scale-105 cursor-pointer"
          }`}
          variants={freeTrialFormChild}
          custom={{ x: -250 }}
        >
          Submit Request
        </motion.button>
      </form>
    </ADiv>
  );
};
export default FreeTrialForm;
