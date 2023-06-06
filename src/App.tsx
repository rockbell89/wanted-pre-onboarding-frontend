import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import SignUp from './pages/SignUp';
import './App.scss';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
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
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
