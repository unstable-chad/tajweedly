import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import QuranIcon from "../assets/icons/tajweedly-icon.webp";
import { useIsMd } from "@/hooks/useIsScreenSize";
import CoolSeparationBorder from "../assets/icons/separation-design.svg?react";
import blogs from "@/data/blogs";
import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
  const ADiv = motion.div;
  const isMd = useIsMd();

  //   refs
  const blogsBannerRef = useRef(null);
  const blogsBoxRef = useRef(null);

  // in view
  const isInViewBlogsBanner = useInView(blogsBannerRef, {
    once: true,
    amount: isMd ? 0.6 : 0.3,
  });

  // animation variants
  const blogsHeaderDiv = {
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
  const blogsHeaderDivChild = {
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
  const blogsBanner = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  const blogsBox = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const blogCard = {
    hidden: { opacity: 0, x: 100, scale: 0.4 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="pb-20">
        <ADiv className="w-full md:flex  filter contrast-85">
          <ADiv
            className="flex-1 flex justify-center items-center flex-col  md:pb-0 py-10  md:py-0 relative amber-color-gradient bg-gradient-to-r pb-30"
            variants={blogsHeaderDiv}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="font-playfair font-bold text-fluid-md  rounded-tr-2xl rounded-tl-2xl"
              variants={blogsHeaderDivChild}
            >
              Blogs
            </motion.p>
            <ADiv variants={blogsHeaderDivChild}>
              <CoolSeparationBorder className="lg:w-100 w-60 sm:w-80 2xl:w-125" />
            </ADiv>
            <ADiv
              className="flex justify-center items-center  rounded-2xl  p-3"
              variants={blogsHeaderDivChild}
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
              variants={blogsHeaderDivChild}
            >
              If you have any questions or need any kind of information please
              use any of the method to contact us, we will be very happy to
              respond to you
            </motion.p>
          </ADiv>
          <ADiv
            className="flex-1 flex justify-center items-center flex-col mx-4 md:mx-0 pt-10 md:pt-0 gap-5 md:bg-[rgba(228,204,157,0.95)] pb-10"
            variants={imgDiv}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              className="object-cover  md:block hidden"
              src="/images/blogs-img.webp"
              alt="Knowledge"
            />
            <motion.p
              className="font-bold text-2xl text-olive text-fluid-md text-center mt-8"
              variants={imgDivChild}
            >
              خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ
            </motion.p>
            <motion.p
              className="text-fluid-base font-inter text-olive text-center  italic "
              variants={imgDivChild}
            >
              <span className="block md:hidden">
                Seeking knowledge is an obligation upon every Muslim.
              </span>
              <span className="text-fluid-xs">(Sahih al-Bukhari 5027)</span>
            </motion.p>
          </ADiv>
        </ADiv>
        <ADiv
          className="text-fluid-lg font-playfair text-center md:mt-15 mt-8 md:mb-15 mb-10 w-full bg-main text-white py-2"
          ref={blogsBannerRef}
          variants={blogsBanner}
          initial="hidden"
          animate={isInViewBlogsBanner ? "visible" : "hidden"}
        >
          <motion.p>Blogs</motion.p>
        </ADiv>
        <ADiv
          className="grid gap-10 md:grid-cols-2 2xl:grid-cols-4 px-10 sm:px-20 xl:px-30"
          ref={blogsBoxRef}
          variants={blogsBox}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog.id}`}
              key={blog.id}
              className="cursor-pointer"
            >
              <ADiv
                variants={blogCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <BlogCard blog={blog} />
              </ADiv>
            </Link>
          ))}
        </ADiv>
      </div>
    </>
  );
};

export default Blogs;
