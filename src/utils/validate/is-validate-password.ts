export const validatePassword = (password: string) => {
	if (password.length < 8) {
		return false;
	}

	return true;
};
