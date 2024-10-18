import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const animateXY = duration => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});
const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex justify-center flex-wrap gap-4'>
            <motion.div
            variants={animateXY(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-6xl text-red-600'/>
            </motion.div>

            <motion.div 
            variants={animateXY(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-6xl text-blue-400'/>
            </motion.div>

            <motion.div 
            variants={animateXY(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-6xl text-yellow-400'/>
            </motion.div>

            <motion.div 
            variants={animateXY(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-6xl text-sky-400'/>
            </motion.div>

            <motion.div 
            variants={animateXY(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-6xl text-cyan-400'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies