import { Navigate, Outlet } from 'react-router-dom';
import styles from './GuestLayout.module.scss';

const GuestLayout = () => {
	const isAuth = localStorage.getItem('access_token');

	if (isAuth) {
		return <Navigate to="/todo" />;
	}

	return (
		<div className={styles.guest_layout}>
			<Outlet />
		</div>
	);
};

export default GuestLayout;
