import TodoItem from './TodoItem';
import { TodoData, TodoUpdateData } from '../../types';
import styles from './TodoList.module.scss';

interface TodoListProps {
	todos: TodoData[];
	onDelete: (id: number) => void;
	onUpdate: (id: number, todoUpdateData: TodoUpdateData) => void;
}

const TodoList = ({ todos, onDelete, onUpdate }: TodoListProps) => {
	if (!todos.length) {
		return <div className={styles.empty}>할 일을 작성해주세요</div>;
	}

	return (
		<ul className={styles.todo_list}>
			{todos.map((item) => (
				<TodoItem
					item={item}
					key={item.id}
					onDelete={onDelete}
					onUpdate={onUpdate}
				/>
			))}
		</ul>
	);
};

export default TodoList;
