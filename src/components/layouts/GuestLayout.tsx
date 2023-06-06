import { Navigate, Outlet } from 'react-router-dom';

const GuestLayout = () => {
	const isAuth = localStorage.getItem('access_token');

	return isAuth ? <Navigate to="/todo" /> : <Outlet />;
};

export default GuestLayout;
