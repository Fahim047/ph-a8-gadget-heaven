import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
	const { product_id, product_title, product_image, price } = product;
	const navigate = useNavigate();
	return (
		<div className="flex flex-col w-full p-4 drop-shadow-md bg-white rounded-xl space-y-2">
			<div className="h-40 rounded-xl">
				<img
					src={product_image}
					alt=""
					className="w-full h-full object-scale-down"
				/>
			</div>
			<div className="flex-grow">
				<h4 className="text-xl font-bold mb-2">{product_title}</h4>
				<p className="text-gray-500 mb-4">${price}</p>
			</div>
			<button
				className="btn btn-outline border-purple-500 text-purple-500"
				onClick={() => navigate(`/product-details/${product_id}`)}
			>
				View Details
			</button>
		</div>
	);
};

export default ProductCard;
