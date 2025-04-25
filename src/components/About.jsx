import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-lg" src={about} alt="" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6">
              I'm a creative enthusiast exploring the world of video editing and
              videography. I enjoy turning raw footage into engaging stories,
              whether it’s short clips for social media or longer video
              projects. From shooting with a camera to editing with tools like
              DaVinci Resolve and CapCut, I love the whole process of bringing
              visuals to life. I'm constantly learning, experimenting, and
              trying new techniques
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
