import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../Pages/TodoForm';

describe('<TodoForm />', () => {
	const setup = (props = {}) => {
		const utils = render(<TodoForm {...props} />);
		const { getByText, getByPlaceholderText } = utils;
		const input = getByPlaceholderText('할 일을 입력하세요');
		const button = getByText('등록');
		return {
			...utils,
			input,
			button
		};
	};

	it('has input and a button', () => {
		const { input, button } = setup();
		expect(input).toBeTruthy();
		expect(button).toBeTruthy();
	});

	it('change input', () => {
		const { input } = setup();
		fireEvent.change(input, {
			target: {
				value: 'TDD 연습'
			}
		});

		expect(input).toHaveAttribute('value', 'TDD 연습');
	});

	it('calls inInsert and clears input', () => {
		const onInsert = jest.fn();
		const { input, button } = setup({ onInsert });

		fireEvent.change(input, {
			target: {
				value: 'TDD 연습'
			}
		});

		fireEvent.click(button);
		expect(onInsert).toBeCalledWith('TDD 연습');
		expect(input).toHaveAttribute('value', '');
	});
});
