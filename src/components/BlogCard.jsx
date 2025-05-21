import { motion } from "framer-motion";
const BlogCard = ({ blog }) => {
  const ADiv = motion.create("div");
  return (
    <div>
      <ADiv className="courses-card-div bg-white flex flex-col ">
        <ADiv className="">
          <img src={blog.image} alt="" className=" object-cover" />
        </ADiv>
        <ADiv className=" filter brightness-105 w-full py-5 text-center ">
          <motion.p className=" font-semibold font-inter text-fluid-base">
            {blog.title}
          </motion.p>
          <motion.p className=" font-normal mt-3 px-5">
            {blog.description}
          </motion.p>
        </ADiv>
      </ADiv>
    </div>
  );
};

export default BlogCard;
