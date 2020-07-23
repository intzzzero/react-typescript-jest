import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Components/Hello';

it('renders the correct text when no enthusiasm level is given', () => {
	const hello = shallow(<Hello name='Daniel' />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
	const hello = shallow(<Hello name='Daniel' enthusiasmLevel={1} />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
	const hello = shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throw when the enthusiasm level is 0', () => {
	expect(() => {
		shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
	}).toThrow();
});

it('throw when the enthusiasm level is negative', () => {
	expect(() => {
		shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
	}).toThrow();
});
