import { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import { TodoCreateData, TodoData, TodoUpdateData } from '../../types';
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
	const [todoList, setTodoList] = useState<TodoData[]>([]);

	const fetchTodos = async () => {
		try {
			const { data: todos } = await instance.get('/todos');
			if (todos) {
				setTodoList(todos);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleCreateTodo = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const { data: newTodo } = await instance.post('/todos', {
				todo,
			});
			if (newTodo) {
				setTodoList((prevState) => [...prevState, newTodo]);
				onReset();
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteTodo = async (id: number) => {
		try {
			const response = await instance.delete(`/todos/${id}`);
			if (response.status === 204) {
				setTodoList((prevState) =>
					prevState.filter((item: TodoData) => item.id !== id),
				);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdateTodo = async (
		id: number,
		todoUpdateData: TodoUpdateData,
	) => {
		try {
			const { data, status } = await instance.put(
				`/todos/${id}`,
				todoUpdateData,
			);
			if (status === 200 && data) {
				setTodoList((prevState) => {
					return prevState.map((item: TodoData) => {
						if (item.id === id) {
							return { ...item, todoUpdateData };
						}
						return item;
					});
				});
				fetchTodos();
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<FormWrapper title="Todo List">
			<form onSubmit={handleCreateTodo}>
				<TodoForm>
					<InputField
						type="text"
						placeholder="오늘의 할 일"
						name="todo"
						value={todo}
						data-testid="new-todo-input"
						onChange={onChange}
					/>
					<button type="submit" data-testid="new-todo-add-button">
						<HiOutlinePencilAlt />
						추가
					</button>
				</TodoForm>
			</form>
			<TodoList
				todos={todoList}
				onDelete={handleDeleteTodo}
				onUpdate={handleUpdateTodo}
			/>
		</FormWrapper>
	);
};

export default Todo;
