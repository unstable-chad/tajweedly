import { motion } from "framer-motion";
const _motion = motion;
import { useIsMd } from "@/hooks/useIsScreenSize";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const isMd = useIsMd();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const year = new Date().getFullYear();

  // animation variants

  const footerContainer = {
    hidden: isHome ? { opacity: 0, x: -100 } : {},
    visible: isHome
      ? {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4,
            delay: isMd ? 1.5 : 0.3,
            delayChildren: isMd ? 0.5 : 0.1,
            when: "beforeChildren",
          },
        }
      : {},
  };
  const footerData = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      className="bottom-0 bg-main  w-full fixed xl:py-4 py-2  z-100 flex items-center justify-center"
      variants={footerContainer}
      key={location.pathname}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-white font-inter text-fluid-base "
        variants={footerData}
      >
        © {year} Your Company. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
