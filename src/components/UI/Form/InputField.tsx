import { BaseComponentProps } from '../../../types';
import styles from './InputField.module.scss';

interface InputFieldPrpos extends BaseComponentProps {
	type: string;
	label?: string;
	name: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
	type,
	label,
	name,
	value,
	placeholder,
	className,
	onChange,
	...restProps
}: InputFieldPrpos) => {
	return (
		<div className={`${styles.input_field} ${className}`}>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				{...restProps}
			/>
		</div>
	);
};

export default InputField;
