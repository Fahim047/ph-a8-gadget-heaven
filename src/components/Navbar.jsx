import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartProvider';
import Heart from './icons/Heart';
import ShoppingCart from './icons/ShoppingCart';
const Navbar = () => {
	const { cartItems } = useCart();
	return (
		<nav className="py-4 w-11/12 mx-auto flex items-center justify-between">
			<h4 className="text-2xl font-bold">
				Gadget<span className="text-orange-400">Heaven</span>
			</h4>
			<ul className="flex items-center gap-6">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/statistics">Statistics</NavLink>
				</li>
				<li>
					<NavLink to="/dashboard">Dashboard</NavLink>
				</li>
			</ul>
			<div className="space-x-2">
				<button className="relative bg-white p-2 text-gray-500 rounded-full shadow-md hover:bg-gray-100">
					<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
						{cartItems.length}
					</span>
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
