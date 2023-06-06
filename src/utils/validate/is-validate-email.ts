export const validateEmail = (email: string) => {
	if (!email.includes('@')) {
		return false;
	}

	return true;
};
