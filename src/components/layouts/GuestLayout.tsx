import { Navigate, Outlet } from 'react-router-dom';
import jwtStorageService from '../../utils/jwt';
import styles from './GuestLayout.module.scss';

const GuestLayout = () => {
	const isAuth = jwtStorageService.getToken();

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
