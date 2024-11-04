import React from 'react';
const ProductCard = () => {
	return (
		<div className="w-full p-4 drop-shadow-md bg-white rounded-xl space-y-2">
			<div className="h-40 rounded-xl">
				<img
					src="https://ik.imagekit.io/3dqckpw4d/upload/macbook_pro_m2_cto_Space_Grey1662197696m2CTO.png"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<h4 className="text-xl font-bold">Dell Laptop</h4>
			<p className="text-gray-500">Price: $5.99</p>
			<button className="btn btn-outline">View Details</button>
		</div>
	);
};

export default ProductCard;
