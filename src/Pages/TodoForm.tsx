import React from 'react';
import styled from 'styled-components';

const TodoForm = () => {
	const [ todo, setTodo ] = React.useState('');

	const addTodo = React.useCallback(e => {
		setTodo(e.target.value);
	}, []);

	console.log(todo);

	return (
		<TodoContainer>
			<form>
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
