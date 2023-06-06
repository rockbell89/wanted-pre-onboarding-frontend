import { BaseComponentProps } from '../../../types';
import styles from './Button.module.scss';

interface ButtonProps extends BaseComponentProps {
	type: 'button' | 'submit';
}

const Button = ({ type, children, className, ...resProps }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${className}`}
			{...resProps}
		>
			{children}
		</button>
	);
};

export default Button;
