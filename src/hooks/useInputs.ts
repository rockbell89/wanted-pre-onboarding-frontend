import React, { useCallback, useState } from 'react';

const useInputs = <T extends Record<string, any>>(initialFormData: T) => {
	const [formData, setFormData] = useState<T>(initialFormData);

	const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}, []);

	const onReset = useCallback(() => {
		setFormData(initialFormData);
	}, [initialFormData]);

	return {
		formData,
		onChange,
		onReset,
	};
};

export default useInputs;
