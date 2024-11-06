import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Statistics = () => {
	return (
		<div className="bg-stone-100">
			<Navbar />
			<section className="mt-6">
				<div className="bg-purple-500 py-6">
					<div className="w-11/12 mx-auto">
						<h2 className="font-bold text-2xl text-center text-white mb-4">
							Statistics
						</h2>
						<p className="text-gray-200 text-center text-balance max-w-4xl mx-auto">
							Explore the latest gadgets that will take your experience to the
							next level. From smart devices to the coolest accessories, we have
							it all!
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Statistics;
