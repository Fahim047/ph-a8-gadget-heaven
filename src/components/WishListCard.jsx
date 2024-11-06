import { useCart } from '../contexts/CartProvider';
import Trash from './icons/Trash';
const WishListCard = ({ product }) => {
	const { product_id, product_title, price, description, product_image } =
		product;
	const { wishList, setWishList } = useCart();
	const handleRemoveProduct = (id) => {
		const newProducts = wishList.filter((item) => item.product_id !== id);
		setWishList(newProducts);
	};
	return (
		<div className="bg-white flex items-center gap-2 p-4 border rounded-xl">
			<img
				src={product_image}
				alt=""
				className="size-20 rounded-xl object-cover"
			/>
			<div className="flex flex-1 justify-between items-center">
				<div className="space-y-2">
					<h2 className="font-bold text-xl">{product_title}</h2>
					<p className="text-gray-500">{description}</p>
					<p className="text-gray-500">$ {price}</p>
				</div>
				<button
					className="text-red-500"
					onClick={() => handleRemoveProduct(product_id)}
				>
					<Trash />
				</button>
			</div>
		</div>
	);
};

export default WishListCard;
