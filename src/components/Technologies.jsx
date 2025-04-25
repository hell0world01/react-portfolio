import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import davinciLogo from "../assets/davinci-logo.png"
import capcutLogo from "../assets/capcut-logo.png"

const animateXY = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex justify-center flex-wrap gap-4">
        <motion.div
          variants={animateXY(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={davinciLogo}
            alt="DaVinci Resolve"
            className="w-16 h-16"
          />
        </motion.div>

        <motion.div
          variants={animateXY(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={capcutLogo}
            alt="CapCut"
            className="w-16 h-16"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
