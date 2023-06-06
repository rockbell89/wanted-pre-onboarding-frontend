import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import { TodoCreateData, TodoData } from '../../types';
import instance from '../../utils/api';
import FormWrapper from '../../components/UI/Form/FormWrapper';
import useInputs from '../../hooks/useInputs';
import InputField from '../../components/UI/Form/InputField';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import TodoForm from '../../components/Todo/TodoForm';

const Todo = () => {
	const {
		formData: { todo },
		onChange,
		onReset,
	} = useInputs<TodoCreateData>({
		todo: '',
	});
	const [todos, setTodos] = useState<TodoData[]>([]);

	const fetchTodos = async () => {
		try {
			const { data: todos } = await instance.get('/todos');
			if (todos) {
				setTodos(todos);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const createTodo = async () => {
		try {
			const { data: newTodo } = await instance.post('/todos', {
				todo,
			});
			if (newTodo) {
				setTodos((prevState) => [...prevState, newTodo]);
				onReset();
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	useEffect(() => {
		console.log('ss', todo);
	}, [todo]);

	return (
		<FormWrapper title="Todo List">
			<TodoForm>
				<InputField
					type="text"
					placeholder="오늘의 할 일"
					name="todo"
					value={todo}
					data-testid="new-todo-input"
					onChange={onChange}
				/>
				<button onClick={createTodo}>
					<HiOutlinePencilAlt />
					추가
				</button>
			</TodoForm>
			<TodoList todos={todos} />
		</FormWrapper>
	);
};

export default Todo;
