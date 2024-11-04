import ProductCard from './ProductCard';

const Shop = () => {
	const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const links = [1, 2, 3, 4, 5, 6];
	return (
		<div className="flex gap-4 pb-16">
			<aside className="w-[200px]">
				<ul className="space-y-4 bg-white rounded-xl border p-4 shadow-xl">
					{links.map((link) => (
						<li className="btn w-full rounded-full font-medium" key={link}>
							Hello
						</li>
					))}
				</ul>
			</aside>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard key={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
