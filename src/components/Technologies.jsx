import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex justify-center flex-wrap gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-6xl text-red-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-6xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-6xl text-yellow-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-6xl text-sky-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-6xl text-cyan-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies