import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessImage from '../assets/success.png';
import CartProducts from '../components/CartProducts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WishListProducts from '../components/WishListProducts';
import { useCart } from '../contexts/CartProvider';
const Dashboard = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState('cart');
	const { cartItems, setCartItems, setOrders } = useCart();

	const totalPrice = cartItems.reduce(
		(prev, current) => prev + current.price,
		0
	);
	const handleSort = () => {
		const sortedCartItems = cartItems.toSorted((a, b) => b.price - a.price);
		setCartItems(sortedCartItems);
	};
	const handlePurchase = () => {
		const newOrder = {
			orderId: crypto.randomUUID(),
			date: new Date(),
			status: 'Processing',
			total: totalPrice,
			items: cartItems,
		};
		setOrders((prev) => [...prev, newOrder]);
		document.getElementById('payment_success_modal').showModal();
		setCartItems([]);
	};
	return (
		<div className="bg-stone-100">
			<Navbar />
			<section className="mt-6">
				<div className="bg-purple-500 py-6">
					<div className="w-11/12 mx-auto">
						<h2 className="font-bold text-2xl text-center text-white mb-4">
							Dashboard
						</h2>
						<p className="text-gray-200 text-center text-balance max-w-4xl mx-auto">
							Explore the latest gadgets that will take your experience to the
							next level. From smart devices to the coolest accessories, we have
							it all!
						</p>
						<div className="text-center space-x-4 mt-6">
							<button
								className={`btn btn-outline min-w-24 rounded-xl ${
									active === 'cart' ? 'bg-white text-purple-500' : 'text-white'
								}`}
								onClick={() => setActive('cart')}
							>
								Cart
							</button>
							<button
								className={`btn btn-outline min-w-24 rounded-xl ${
									active === 'wishlist'
										? 'bg-white text-purple-500'
										: 'text-white'
								}`}
								onClick={() => setActive('wishlist')}
							>
								Wishlist
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-6 pb-12">
				<div className="max-w-5xl w-11/12 mx-auto">
					<div className="flex flex-wrap gap-4 justify-between items-center">
						<h2 className="text-2xl font-bold">
							{active === 'cart' ? 'Cart' : 'Wishlist'}
						</h2>
						{active === 'cart' && (
							<div className="flex items-center gap-4">
								<h3 className="font-bold">
									Total Cost: ${totalPrice.toFixed(2)}
								</h3>
								<button
									className="btn btn-sm btn-outline text-purple-500 border border-purple-500 hover:bg-transparent hover:border-purple-500 hover:text-purple-500"
									onClick={handleSort}
								>
									Sort by price
								</button>
								<button
									className="btn btn-sm bg-purple-500 text-white hover:text-purple-500 rounded-full"
									disabled={cartItems.length === 0}
									onClick={handlePurchase}
								>
									Purchase
								</button>
							</div>
						)}
					</div>
					{active === 'cart' ? <CartProducts /> : <WishListProducts />}
				</div>
			</section>
			<dialog
				id="payment_success_modal"
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box text-center p-8 bg-white rounded-lg shadow-lg">
					<div className="flex flex-col items-center">
						<div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
							<img src={SuccessImage} alt="" />
						</div>
						<h3 className="font-bold text-2xl text-gray-800">
							Payment Successful!
						</h3>
						<p className="text-gray-600 mt-2">
							Thank you for your purchase! Your payment has been successfully
							processed.
						</p>
						<div className="modal-action flex justify-center mt-6">
							<button
								className="btn btn-outline"
								onClick={() => navigate('/orders')}
							>
								View Orders
							</button>
							<button
								className="btn bg-purple-500 text-white hover:bg-purple-600"
								onClick={() => {
									document.getElementById('payment_success_modal').close();
									navigate('/');
								}}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</dialog>

			<Footer />
		</div>
	);
};

export default Dashboard;
