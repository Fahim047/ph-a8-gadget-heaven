import React from 'react';
import { useCart } from '../contexts/CartProvider';
import CartProductCard from './CartProductCard';

const CartProducts = () => {
	const { cartItems } = useCart();
	return (
		<div className="mt-6 space-y-2">
			{cartItems.map((cartItem) => (
				<CartProductCard key={cartItem.product_id} product={cartItem} />
			))}
		</div>
	);
};

export default CartProducts;
