import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

const App = () => {
	return (
		<div className="bg-stone-100 pt-4">
			<header className="rounded-xl max-w-7xl mx-auto bg-purple-500 text-white py-4 mb-80">
				<Navbar />
				<Banner />
			</header>
			<main className="max-w-6xl w-11/12 mx-auto">
				<h2 className="text-3xl font-bold text-center mb-6">
					Explore Cutting Edge Gadget
				</h2>
				<Shop />
			</main>
			<Footer />
		</div>
	);
};

export default App;
