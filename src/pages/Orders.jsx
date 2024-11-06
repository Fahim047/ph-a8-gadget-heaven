import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const orders = [
	{
		orderId: '123456',
		date: '2023-10-25',
		status: 'Delivered',
		total: 59.98,
		items: [
			{
				id: 'p1',
				name: 'Product 1',
				image: 'https://via.placeholder.com/50',
				quantity: 1,
				price: 29.99,
			},
			{
				id: 'p2',
				name: 'Product 2',
				image: 'https://via.placeholder.com/50',
				quantity: 1,
				price: 29.99,
			},
		],
	},
	{
		orderId: '654321',
		date: '2023-11-01',
		status: 'Pending',
		total: 89.97,
		items: [
			{
				id: 'p3',
				name: 'Product 3',
				image: 'https://via.placeholder.com/50',
				quantity: 2,
				price: 44.99,
			},
		],
	},
];

const Orders = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl mx-auto p-6 min-h-screen">
				<h1 className="text-3xl font-bold text-purple-500 mb-8">Your Orders</h1>

				{orders.length > 0 ? (
					<div className="space-y-6">
						{orders.map((order) => (
							<div
								key={order.orderId}
								className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
							>
								<div className="flex justify-between items-center border-b pb-4 mb-4">
									<div>
										<p className="text-lg font-semibold text-gray-800">
											Order #{order.orderId}
										</p>
										<p className="text-sm text-gray-500">
											Date: {new Date(order.date).toLocaleDateString()}
										</p>
									</div>
									<p
										className={`text-sm font-semibold ${
											order.status === 'Delivered'
												? 'text-green-600'
												: 'text-yellow-500'
										}`}
									>
										{order.status}
									</p>
								</div>

								<div className="space-y-2">
									{order.items.map((item) => (
										<div
											key={item.id}
											className="flex justify-between items-center"
										>
											<div className="flex items-center">
												<img
													src={item.image}
													alt={item.name}
													className="w-12 h-12 rounded-lg object-cover mr-4"
												/>
												<div>
													<p className="font-medium text-gray-800">
														{item.name}
													</p>
													<p className="text-sm text-gray-500">
														Qty: {item.quantity}
													</p>
												</div>
											</div>
											<p className="text-sm font-medium text-gray-700">
												${item.price.toFixed(2)}
											</p>
										</div>
									))}
								</div>

								<div className="mt-4 flex justify-between items-center pt-4 border-t">
									<p className="text-sm text-gray-600">Total</p>
									<p className="text-lg font-bold text-gray-800">
										${order.total.toFixed(2)}
									</p>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className="text-center text-gray-500">No orders found.</p>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Orders;
