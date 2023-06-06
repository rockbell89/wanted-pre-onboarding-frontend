import { BaseComponentProps } from '../../../types';
import styles from './InputField.module.scss';

interface InputFieldPrpos extends BaseComponentProps {
	type: string;
	label: string;
	name: string;
	placeholder?: string;
}

const InputField = ({
	type,
	label,
	name,
	placeholder,
	...restProps
}: InputFieldPrpos) => {
	return (
		<div className={styles.input_field}>
			<label htmlFor={name}>{label}</label>
			<input type={type} id={name} {...restProps} placeholder={placeholder} />
		</div>
	);
};

export default InputField;
