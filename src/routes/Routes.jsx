import { createBrowserRouter } from 'react-router-dom';
import ProductsGallery from '../components/ProductsGallery';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Statistics from '../pages/Statistics';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		loader: () => fetch('/categories.json'),
		children: [
			{
				path: '',
				loader: () => fetch('/products.json'),
				element: <ProductsGallery />,
			},
			{
				path: '/products/:category',
				loader: () => fetch('/products.json'),
				element: <ProductsGallery />,
			},
		],
	},
	{
		path: '/product-details/:productId',
		loader: () => fetch('/products.json'),
		element: <ProductDetails />,
	},
	{
		path: '/statistics',
		element: <Statistics />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		path: '*',
		element: '404 Not found',
	},
]);
export default routes;
