import { BaseComponentProps } from '../../types';
import styles from './TodoForm.module.scss';

const TodoForm = ({ children }: BaseComponentProps) => {
	return <div className={styles.todo_form}>{children}</div>;
};

export default TodoForm;
