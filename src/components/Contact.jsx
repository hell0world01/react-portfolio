import React from 'react'
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'

const Contact = () => {
    const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	
		formData.append("access_key", "ef9c8192-5dfa-470b-8e66-6aeacb9898cf");
	
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
	
		const res = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		  },
		  body: json
		}).then((res) => res.json());
	
		if (res.success) {
			Swal.fire({
				title: "Success!",
				text: "Message sent successfully!",
				icon: "success"
			  });
		}
	  };
  return ( 
    <section className='min-h-screen flex justify-center items-center '>
			<form action="" className='max-w-[600px] w-full p-6 rounded-lg' onSubmit={onSubmit}>
			<h3 className='text-center text-3xl '>Contact</h3>
				<div className='mt-5'>
					<label htmlFor="">First Name</label>
					<input type="text" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2 outline-none text-black' placeholder='First Name' name='first name' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Last Name</label>
					<input type="text" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2 outline-none text-black' placeholder='Last Name' name='last name' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Email</label>
					<input type="email" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2 outline-none text-black' placeholder='Email' name='email' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Message</label>
					<textarea  id="" className='w-full border rounded-md p-4 text-base from-neutral-300 mt-2 h-48 resize-none outline-none text-black' placeholder='Message' name="message" required></textarea>
				</div>
				<motion.button 
                whileTap={{
                    scale: .9
                }}
                className='w-full bg-purple-800 h-14 rounded-md shadow text-white outline-none' type='submit'>Submit</motion.button>
			</form>
		</section>
  )
}

export default Contact