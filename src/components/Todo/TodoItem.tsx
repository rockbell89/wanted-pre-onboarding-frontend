import React, { useState } from 'react';
import styles from './TodoItem.module.scss';
import { TodoData } from '../../types';

interface TodoItemProps {
	item: TodoData;
}

const TodoItem = ({ item }: TodoItemProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		setIsChecked(checked);
	};

	return (
		<li className={styles.todo_item}>
			<label htmlFor={`todo-checkbox-${item.id}`}>
				<div className={styles.todo_item_checkbox}>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={onChange}
						defaultChecked={item.isCompleted}
						id={`todo-checkbox-${item.id}`}
					/>
				</div>
				<span>{item.todo}</span>
			</label>
		</li>
	);
};

export default TodoItem;
