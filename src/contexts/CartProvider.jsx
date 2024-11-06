import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [wishList, setWishList] = useState([]);
	const [orders, setOrders] = useState([]);
	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				wishList,
				setWishList,
				orders,
				setOrders,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export const useCart = () => {
	const context = useContext(CartContext);
	return context;
};
