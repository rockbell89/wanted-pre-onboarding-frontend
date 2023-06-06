import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import styles from './PrivateLayout.module.scss';

const PrivateLayout = () => {
	const isAuth = localStorage.getItem('access_token');

	const navigaet = useNavigate();
	const handleSignout = () => {
		localStorage.removeItem('access_token');
		navigaet('/signin');
	};

	if (!isAuth) return <Navigate to="/signin" />;

	return (
		<div className={styles.private_layout}>
			<header className={styles.private_header}>
				<button type="button" onClick={handleSignout}>
					로그아웃
				</button>
			</header>
			<div className={styles.private_container}>
				<Outlet />
			</div>
		</div>
	);
};

export default PrivateLayout;
