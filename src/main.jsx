import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './contexts/CartProvider.jsx';
import './index.css';
import routes from './routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CartProvider>
			<RouterProvider router={routes} />
			<ToastContainer autoClose={3000} />
		</CartProvider>
	</StrictMode>
);
