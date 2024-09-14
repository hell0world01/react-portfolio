import React from 'react';
import profilePic from "../assets/amritGrgProfile.jpg";
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Amrit Gurung
                    </h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Front-end Developer
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    "Passionate about crafting engaging and responsive user interfaces, I am working towards becoming a skilled frontend developer with a focus on creating seamless web experiences."
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic} alt="profile picture" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero