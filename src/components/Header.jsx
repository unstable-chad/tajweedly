import { useState, useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";
import QuranIcon from "../assets/icons/tajweedly-icon.webp";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useIsMd } from "@/hooks/useIsScreenSize";

// components
import MobileNavDrawer from "./mobileNavDrawer";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const ADiv = motion.div;
  const isMd = useIsMd();
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "font-bold text-gold " : "";

  const isHome = location.pathname === "/";

  const mobileNavButton = useRef(null);
  // nav data
  const navLinks = [
    { id: 1, label: "Blogs", link: "/blogs" },
    { id: 2, label: "Pricing", link: "/courses" },
    { id: 3, label: "Contact Us", link: "/contact" },
    { id: 4, label: "About Us", link: "/about" },
  ];

  //   animation variants
  const navContainer = {
    hidden: isHome ? { opacity: 0 } : {},
    visible: isHome
      ? {
          opacity: 1,
          transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 0.5,
            delay: isMd ? 1.5 : 0.3,
          },
        }
      : {},
  };
  const navItems = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  //states
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  //   hooks
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  //   functions
  const handleMobileNavButton = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <motion.header
      className="bg-main text-white  py-2 flex justify-between"
      variants={navContainer}
      key={location.pathname}
      initial="hidden"
      animate="visible"
    >
      <ADiv
        className="ms-[2%] md:ms-[10%] px-4 flex   md:justify-center gap-1"
        variants={navItems}
      >
        <Link to="/" className="flex">
          <img
            src={QuranIcon}
            alt="Quran Icon"
            className="icon-w-fluid-nav xl:mt-1 2xl:mt-2"
          />
          <p className="text-fluid-lg font-bold">Tajweedly</p>
        </Link>
      </ADiv>

      {/* nav links */}
      <ADiv className=" hidden md:flex nav-items-gap-fluid md:me-[3%] lg:me-[8%]  xl:mt-1 2xl:mt-2 font-medium items-center text-fluid-base ">
        {navLinks.map((link) => (
          <ADiv key={link.id} variants={navItems} className="">
            <Link
              key={link.id}
              to={link.link}
              className={`transform transition-all duration-300 hover:scale-115 inline-block ${isActive(
                link.link
              )}`}
            >
              {link.label}
            </Link>
          </ADiv>
        ))}
      </ADiv>

      {/* mobile nav links div */}
      <div className="md:hidden flex items-center  me-[3%]">
        <Bars3Icon
          className="icon-w-fluid-nav"
          onClick={handleMobileNavButton}
          ref={mobileNavButton}
        />
      </div>
      <AnimatePresence>
        {mobileNavOpen && (
          <MobileNavDrawer
            navLinks={navLinks}
            closeMobileNav={() => setMobileNavOpen(false)}
            mobileNavOpen={mobileNavOpen}
            mobileNavButton={mobileNavButton}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
