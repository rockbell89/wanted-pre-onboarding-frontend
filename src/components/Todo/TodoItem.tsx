import React, { useState } from 'react';
import styles from './TodoItem.module.scss';
import { TodoData, TodoUpdateData } from '../../types';
import InputField from '../UI/Form/InputField';
import useInputs from '../../hooks/useInputs';
import instance from '../../utils/api';

interface TodoItemProps {
	item: TodoData;
	onDelete: (id: number) => void;
	onUpdate: (id: number, todoUpdateData: TodoUpdateData) => void;
}

const TodoItem = ({ item, onDelete, onUpdate }: TodoItemProps) => {
	const [isChecked, setIsChecked] = useState<boolean>(item.isCompleted);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const {
		formData: { todo },
		onChange: onChangeTodo,
	} = useInputs<TodoUpdateData>({
		todo: item.todo,
	});

	const handleUpdateChecked = async (
		event: React.ChangeEvent<HTMLInputElement>,
		id: number,
	) => {
		const { checked } = event.target;
		const { data } = await instance.put(`/todos/${id}`, {
			todo: todo,
			isCompleted: checked,
		});
		if (data) {
			setIsChecked(checked);
		}
	};

	const handleEditItem = () => {
		setIsEdit(true);
	};

	const handleEditCancelItem = () => {
		setIsEdit(false);
	};

	const handleSubmitItem = (id: number, todoUpdateData: TodoUpdateData) => {
		onUpdate(id, todoUpdateData);
		handleEditCancelItem();
	};

	return (
		<li className={styles.todo_item}>
			{!isEdit ? (
				<>
					<label
						htmlFor={`todo-checkbox-${item.id}`}
						className={`${isChecked && styles.todo_item_active}`}
					>
						<div className={styles.todo_item_checkbox}>
							<input
								type="checkbox"
								checked={isChecked}
								onChange={(event) => handleUpdateChecked(event, item.id)}
								id={`todo-checkbox-${item.id}`}
							/>
						</div>
						<span>{item.todo}</span>
					</label>
					<button
						className={`${styles.todo_item_button} ${styles.todo_item_button_modify}`}
						data-testid="modify-button"
						onClick={handleEditItem}
					>
						수정
					</button>
					<button
						className={`${styles.todo_item_button} ${styles.todo_item_button_delete}`}
						data-testid="delete-button"
						onClick={() => onDelete(item.id)}
					>
						삭제
					</button>
				</>
			) : (
				<>
					<InputField
						type="text"
						name="todo"
						value={todo}
						onChange={onChangeTodo}
						data-testid="modify-input"
						className={styles.todo_item_modify_input}
					/>
					<button
						className={`${styles.todo_item_button} ${styles.todo_item_button_submit}`}
						data-testid="submit-button"
						onClick={() =>
							handleSubmitItem(item.id, {
								todo: todo,
								isCompleted: item.isCompleted,
							})
						}
					>
						제출
					</button>
					<button
						className={`${styles.todo_item_button} ${styles.todo_item_button_cancel}`}
						data-testid="cancel-button"
						onClick={handleEditCancelItem}
					>
						취소
					</button>
				</>
			)}
		</li>
	);
};

export default TodoItem;
