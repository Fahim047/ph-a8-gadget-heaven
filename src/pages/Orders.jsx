import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../contexts/CartProvider';

const Orders = () => {
	const { orders } = useCart();
	return (
		<div className="bg-stone-100">
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
									<div className="space-y-2">
										<p className="text-lg font-semibold text-gray-800">
											Order Id #{order.orderId}
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
											key={item.product_id}
											className="flex justify-between items-center"
										>
											<div className="flex items-center">
												<img
													src={item.product_image}
													alt={item.product_title}
													className="w-12 h-12 rounded-lg object-cover mr-4"
												/>
												<div>
													<p className="font-medium text-gray-800">
														{item.product_title}
													</p>
													<p className="text-sm text-gray-500">Qty: 1</p>
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
