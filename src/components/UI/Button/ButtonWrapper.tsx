import { BaseComponentProps } from '../../../types';
import styles from './ButtonWrapper.module.scss';

const ButtonWrapper = ({ children }: BaseComponentProps) => {
	return <div className={styles.button_wrapper}>{children}</div>;
};

export default ButtonWrapper;
