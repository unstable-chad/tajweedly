import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import blogs from "@/data/blogs";

const BlogPage = () => {
  const ADiv = motion.create("div");
  const ALink = motion.create(Link);

  const params = useParams();
  const blog = blogs.find((blog) => blog.id === params.id);
  return (
    <div className="pb-20">
      <ADiv className="flex w-full items-center mt-10 ms-5">
        <ALink
          to="/blogs"
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer  rounded hidden sm:block text-4xl"
        >
          &#128281;
        </ALink>
        <motion.p className="text-center sm:mx-auto font-black text-fluid-xl">
          {blog.title}
        </motion.p>
      </ADiv>
      <ADiv className="sm:w-4/5 mx-auto sm:pt-15 pt-10 w-full">
        <img src={blog.image} alt="" />
      </ADiv>
      <ADiv dangerouslySetInnerHTML={{ __html: blog.content }}></ADiv>
    </div>
  );
};

export default BlogPage;
