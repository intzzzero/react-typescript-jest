import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoForm from '../Pages/TodoForm';

describe('<TodoForm />', () => {
	it('has input', () => {
		const form = shallow(<TodoForm />);
		expect(form.find('input').text()).toEqual('');
	});

	it('has buttons', () => {
		const form = shallow(<TodoForm />);
		expect(form.find('button').text()).toEqual('등록');
	});

	it('change input', () => {
		const form = shallow(<TodoForm />);
		const input = form.find('input');
		input.simulate('change', {
			target: {
				value: 'hello world'
			}
		});
	});
});
