import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Layout from './components/layouts/Layout';
import SignUp from './pages/SignUp';
import './App.scss';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import GuestLayout from './components/layouts/GuestLayout';
import PrivateLayout from './components/layouts/PrivateLayout';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/signin" />,
			},
			{
				element: <GuestLayout />,
				children: [
					{
						path: 'signup',
						element: <SignUp />,
					},
					{
						path: 'signin',
						element: <SignIn />,
					},
				],
			},
			{
				element: <PrivateLayout />,
				children: [
					{
						path: 'todo',
						element: <Todo />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
