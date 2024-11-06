import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
			<h1 className="text-9xl font-extrabold text-purple-500">404</h1>
			<p className="mt-4 text-2xl font-semibold text-gray-700">
				Oops! Page not found
			</p>
			<p className="mt-2 text-lg text-gray-600">
				The page you're looking for doesn't exist.
			</p>
			<button
				onClick={() => navigate('/')}
				className="mt-6 px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200 ease-in-out"
			>
				Go Back Home
			</button>
		</div>
	);
};

export default NotFoundPage;
