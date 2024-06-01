import { Session } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useEffect } from 'react';



function Home({ session }) {
	const [task, setTask] = useState('');
	const [loading, setLoading] = useState(false);
	const [todos, setTodos] = useState<Todo[]>([]);

	// Load todos on start
	useEffect(() => {
		loadTodos();
	}, []);

	// Get all data from the todos table
	const loadTodos = async () => {
		let { data } = await supabase
			.from('todos')
			.select('*')
			.order('inserted_at', { ascending: false });
		setTodos(data || []);
	};

	// Add a new todo to our table
	const addTodo = async (e) => {
		e.preventDefault();

		const { user } = session;

		const newTodo = {
			user_id: user.id,
			task
		};
		setLoading(true);
		const result = await supabase.from('todos').insert(newTodo).select().single();
		setTodos([result.data, ...todos]);
		setLoading(false);
		setTask('');
	};

	const updateTodo = async (ev, todo) => {
		// Todo
	};

	const deleteTodo = async (todo) => {
		// Todo
	};

	const logout = async () => {
		// Todo
	};

	return (
		<div>
			<h1>Supabase + React = Todos 🚀</h1>
			<form onSubmit={addTodo}>
				<label htmlFor="todo">New todo:</label>
				<input
					id="todo"
					className="input"
					placeholder="Buy milk"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button disabled={loading}>Add Todo</button>
				<button onClick={logout}>Logout</button>
			</form>
			{todos.map((todo) => (
				<div key={todo.id} className="row">
					<input
						type="checkbox"
						checked={todo.is_complete}
						onChange={(ev) => updateTodo(ev, todo)}
					/>
					<span className={todo.is_complete ? 'done' : ''}>{todo.task}</span>
					<button onClick={() => deleteTodo(todo)}>Delete</button>
				</div>
			))}
		</div>
	);
}

export default Home;

