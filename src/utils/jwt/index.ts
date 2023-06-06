const jwtStorageService = () => {
	const TOKEN_NAME = 'access_token';

	const getToken = () => {
		return localStorage.getItem(TOKEN_NAME);
	};

	const setToken = (token: string) => {
		localStorage.setItem(TOKEN_NAME, token);
	};

	const removeToken = () => {
		localStorage.removeItem(TOKEN_NAME);
	};

	return {
		getToken,
		setToken,
		removeToken,
	};
};

export default jwtStorageService();
