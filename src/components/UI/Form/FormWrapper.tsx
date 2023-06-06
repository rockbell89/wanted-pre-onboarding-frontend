import { BaseComponentProps } from '../../../types';
import styles from './FormWrapper.module.scss';

interface FormWrapperProps extends BaseComponentProps {
	title?: string;
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
	return (
		<div className={styles.form_wrapper}>
			<h1 className={styles.form_title}>{title}</h1>
			{children}
		</div>
	);
};

export default FormWrapper;
