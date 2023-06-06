import TodoItem from './TodoItem';
import { TodoData } from '../../types';
import styles from './TodoList.module.scss';

interface TodoListProps {
	todos: TodoData[];
}

const TodoList = ({ todos }: TodoListProps) => {
	if (!todos.length) {
		return <div className={styles.empty}>할 일을 작성해주세요</div>;
	}

	return (
		<ul className={styles.todo_list}>
			{todos.map((item) => (
				<TodoItem item={item} key={item.id} />
			))}
		</ul>
	);
};

export default TodoList;
