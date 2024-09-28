import React from 'react'
import logo from '../assets/amritGurungLogo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <img src={logo} alt="" />
        </div>
        <div className='flex m-8 justify-center items-center gap-4 text-2xl'>
          	<Link to="https://www.linkedin.com/in/amrit-gurung-4028a3272/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>

        	<Link to="https://github.com/hell0world01" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>

			<Link to="https://www.instagram.com/the.kenzy/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>

			<Link to=""><FaSquareXTwitter /></Link>
        </div>
    </nav>
  )
}

export default Navbar