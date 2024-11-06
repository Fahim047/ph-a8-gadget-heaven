import { useCart } from '../contexts/CartProvider';
import WishListCard from './WishListCard';

const WishListProducts = () => {
	const { wishList } = useCart();
	return (
		<div className="mt-6 space-y-2">
			{wishList.map((item) => (
				<WishListCard key={item.product_id} product={item} />
			))}
		</div>
	);
};

export default WishListProducts;
