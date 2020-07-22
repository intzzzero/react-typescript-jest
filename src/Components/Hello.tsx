import React from 'react';
import styled from 'styled-components';

export interface Props {
	name: string;
	enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
	if (enthusiasmLevel <= 0) {
		throw new Error('You could be a little more enthusiastic. :D');
	}

	return (
		<HelloContainer>
			<div className='greeting'>Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
			<button>Click me!</button>
		</HelloContainer>
	);
};

const HelloContainer = styled.main`
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 20px;
	font-size: 48px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

	button {
		margin-left: 25px;
		margin-right: 25px;
		font-size: 40px;
		min-width: 50px;
	}
`;

export default Hello;

const getExclamationMarks = (numChars: number) => {
	return Array(numChars + 1).join('!');
};
