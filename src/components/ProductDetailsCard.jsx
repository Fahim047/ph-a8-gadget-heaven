import React from 'react';
import { useCart } from '../contexts/CartProvider';
import Heart from './icons/Heart';
import ShoppingCart from './icons/ShoppingCart';

const ProductDetailsCard = ({ product }) => {
	const { product_title, specifications } = product;
	const { setCartItems } = useCart();
	return (
		<div className="-mt-52 max-w-5xl w-11/12 mx-auto bg-white p-4 rounded-xl">
			{/* flex flex-col md:flex-row items-center justify-between gap-6 */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="max-w-[400px] mx-auto">
					<img
						src="https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp"
						alt=""
					/>
				</div>
				<div className="space-y-2 mr-6">
					<h3 className="text-2xl font-bold">{product_title}</h3>
					<p className="text-lg font-medium">Price: $55.66</p>
					<p className="badge badge-lg bg-lime-100/80 border border-lime-400">
						In Stock
					</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a.
					</p>
					<p>
						<h4 className="font-bold text-lg">Specification:</h4>
						<ul className="pl-5 list-disc text-gray-500">
							{specifications &&
								specifications.map((item, index) => (
									<li key={index}>{item}</li>
								))}
						</ul>
					</p>
					<p className="font-bold text-lg">Rating ⭐</p>
					<div className="flex items-center gap-2">
						<button
							className="btn rounded-full bg-purple-500 text-white hover:text-black"
							onClick={() => setCartItems((prev) => [...prev, product])}
						>
							Add to cart <ShoppingCart />
						</button>
						<button className="p-2 border rounded-full">
							<Heart />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsCard;
