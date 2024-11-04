const Footer = () => {
	return (
		<footer className="py-16 bg-white text-center">
			<h2 className="font-bold text-2xl mb-2">Gadget Heaven</h2>
			<p className="text-gray-500">
				Leading the way in cutting-edge technology and innovation.
			</p>
			<hr className="max-w-5xl mx-auto my-6" />
			<section className="max-w-2xl w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-4">
				<nav className="flex flex-col text-gray-500">
					<h4 className="text-[#1F2937] font-bold">Services</h4>
					<a href="/">Product Support</a>
					<a href="/">Order Tracking</a>
					<a href="/">Shipping & Delivery</a>
					<a href="/">Returns</a>
				</nav>
				<nav className="flex flex-col text-gray-500">
					<h4 className="text-[#1F2937] font-bold">Services</h4>
					<a href="/">About Us</a>
					<a href="/">Careers</a>
					<a href="/">Contact</a>
				</nav>
				<nav className="flex flex-col text-gray-500">
					<h4 className="text-[#1F2937] font-bold">Services</h4>
					<a href="/">Terms of Service</a>
					<a href="/">Privacy Policy</a>
					<a href="/">Cookie Policy</a>
				</nav>
			</section>
		</footer>
	);
};

export default Footer;
