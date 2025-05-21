import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import useClickOutside from "@/hooks/useClickOutside";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const MobileNavDrawer = ({
  navLinks,
  closeMobileNav,
  mobileNavOpen,
  mobileNavButton,
  isActive,
}) => {
  const mobileNav = useRef();

  //   animation variants
  const container = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const links = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: { opacity: 0, x: 20 },
  };

  //   functions
  const closeMobileNavHandler = useCallback(() => {
    closeMobileNav();
  }, [closeMobileNav]);

  //hook
  useClickOutside(
    mobileNav,
    closeMobileNavHandler,
    mobileNavOpen,
    mobileNavButton
  );

  return (
    <motion.div
      className=" md:hidden w-full flex justify-center absolute mx-auto top-15 z-10"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="bg-sand rounded-xl  w-3/4" ref={mobileNav}>
        <XCircleIcon
          className="w-7 h-7  text-gold ms-auto m-3"
          onClick={closeMobileNavHandler}
        />
        <motion.div className=" flex flex-col items-center gap-14 pb-10 text-lg text-black">
          {navLinks.map((link) => (
            <motion.div key={link.id} variants={links}>
              <Link
                className={`font-inter font-semibold ${isActive(link.link)}`}
                key={link.id}
                to={link.link}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNavDrawer;
