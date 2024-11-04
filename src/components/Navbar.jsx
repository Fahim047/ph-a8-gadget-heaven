import React from 'react';
import Heart from './icons/Heart';
import ShoppingCart from './icons/ShoppingCart';
const Navbar = () => {
	return (
		<nav className="py-4 w-11/12 mx-auto flex items-center justify-between">
			<h4 className="text-2xl font-bold">
				Gadget<span className="text-orange-400">Heaven</span>
			</h4>
			<ul className="flex items-center gap-6">
				<li>Home</li>
				<li>Dashboard</li>
				<li>Statistics</li>
			</ul>
			<div className="space-x-2">
				<button className="bg-white p-2 text-gray-500 rounded-full">
					<ShoppingCart />
				</button>
				<button className="bg-white p-2 text-gray-500 rounded-full">
					<Heart />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
