import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useCart } from '../contexts/CartProvider';
import Heart from './icons/Heart';
import HeartSolid from './icons/HeartSolid';
import ShoppingCart from './icons/ShoppingCart';
const ProductDetailsCard = ({ product }) => {
	const {
		product_title,
		product_image,
		specifications,
		description,
		price,
		rating,
	} = product;
	console.log(rating, price);
	const { setCartItems, wishList, setWishList } = useCart();
	const [isDisabled, setIsDisabled] = useState(false);

	const handleAddToWishList = () => {
		setWishList((prev) => [...prev, product]);
		setIsDisabled(true);
	};
	return (
		<div className="-mt-52 max-w-5xl w-11/12 mx-auto bg-white p-4 rounded-xl">
			{/* flex flex-col md:flex-row items-center justify-between gap-6 */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="max-w-[400px] mx-auto">
					<img src={product_image} alt="" />
				</div>
				<div className="space-y-2 mr-6">
					<h3 className="text-2xl font-bold">{product_title}</h3>
					<p className="text-lg font-medium">$ {price}</p>
					<p className="badge badge-lg bg-lime-100/80 border border-lime-400">
						In Stock
					</p>
					<p className="text-gray-500">{description}</p>
					<p>
						<h4 className="font-bold text-lg">Specification:</h4>
						<ul className="pl-5 list-disc text-gray-500">
							{specifications?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</p>
					<p className="font-bold text-lg">Rating ⭐</p>
					<ReactStars
						count={5}
						value={Math.round(rating)}
						isHalf={true}
						edit={false}
						size={24}
						activeColor="#ffd700"
					/>
					<div className="flex items-center gap-2">
						<button
							className="btn rounded-full bg-purple-500 text-white hover:text-black"
							onClick={() => setCartItems((prev) => [...prev, product])}
						>
							Add to cart <ShoppingCart />
						</button>
						<button
							className={`p-2 border rounded-full ${
								isDisabled ? 'cursor-not-allowed' : ''
							}`}
							disabled={isDisabled}
							onClick={handleAddToWishList}
						>
							{isDisabled ? <HeartSolid /> : <Heart />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsCard;
