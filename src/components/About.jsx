import React from 'react';
import about from '../assets/about.jpg'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-lg' src={about} alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>I'm an enthusiastic student who is currently learning about the fascinating field of web development, really wanting to become a frontend developer. I like picking up new skills in technology and creating intuitive, user-friendly interfaces that make concepts come to life. Currently honing my HTML, CSS, JavaScript, and React skills while keeping up with the latest frameworks and tools is my aim. I am driven by creativity, problem-solving, and a love for developing seamless digital experiences.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About