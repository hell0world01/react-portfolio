import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="overflow-x-hidden selection:bg-cyan-300 text-neutral-300 antialiased selection:text-cyan-950">
			
			<div className="fixed top-0 -z-10 h-full w-full">
			<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
			</div>
			<div className="container mx-auto px-8">
			<Navbar />
			<Hero />
			<About />
			<Technologies />
			<Contact />
			<Footer />
			</div>
		</div>
);
};

export default App;
