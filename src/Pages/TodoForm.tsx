import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type TodoInsertProps = {
	onInsert: (text: string) => void;
};

const TodoForm = ({ onInsert }: TodoInsertProps) => {
	const [ todo, setTodo ] = useState('');

	const addTodo = useCallback(e => {
		setTodo(e.target.value);
	}, []);

	const submitTodo = useCallback(
		e => {
			onInsert(todo);
			setTodo('');
			e.preventDefault();
		},
		[ onInsert, todo ]
	);

	return (
		<TodoContainer>
			<form onSubmit={submitTodo}>
				<input placeholder='할 일을 입력하세요' value={todo} onChange={addTodo} />
				<button type='submit'>등록</button>
			</form>
		</TodoContainer>
	);
};

const TodoContainer = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	form {
		width: 100%;
		display: flex;
		justify-content: center;

		input {
			width: 40%;
			height: 30px;
			font-size: 18px;
			padding: 0 20px;
			border: none;
			border-bottom: 1px solid black;
			outline: none;

			&::placeholder {
				text-align: center;
				font-size: 14px;
			}
		}

		button {
			padding: 0 10px;
			border: 1px solid black;
			border-radius: 5px;
			background-color: #fff;
			margin-left: 15px;
		}
	}
`;

export default TodoForm;
