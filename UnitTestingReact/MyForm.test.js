import React from 'react';
import { mount } from 'enzyme';
import MyForm from './MyForm';

describe("MyForm", () => {
	
	it("should call the textChanged function", () => {
		const component = mount(<MyForm/>);
		let textbox = component.find("input");
		textbox.simulate('change', { target: { value: "Sam"} });
		expect(component).toMatchSnapshot();
		expect(component.state('name')).toEqual("Sam");
		component.unmount();
	});
	
	it("should call the buttonClick function", () => {
		const component = mount(<MyForm/>);
		let textbox = component.find("input");
		textbox.simulate('change', { target: { value: "Sam"} });
		let button = component.find("button");
		button.simulate('click');
		expect(component).toMatchSnapshot();
		expect(component.state('message')).toEqual("Hi Sam");
		component.unmount();
	});
	
});