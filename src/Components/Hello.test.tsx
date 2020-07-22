import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello';

enzyme.configure({ adapter: new Adapter() });

it('renders the correct thext when no enthusiasm level is given', () => {
	const hello = enzyme.shallow(<Hello name='Daniel' />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
	const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
	const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
	expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throw when the enthusiasm level is 0', () => {
	expect(() => {
		enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
	}).toThrow();
});

it('throw when the enthusiasm level is negative', () => {
	expect(() => {
		enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
	}).toThrow();
});
