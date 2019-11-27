import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe("Welcome", () => {
	it("should render properly", () => {
		const component = shallow(<Welcome/>);
		expect(component).toMatchSnapshot();
	});
	
	it("should contain header text", () => {
		const component = shallow(<Welcome/>);
		expect(component.find("h3").text()).toEqual("Welcome to React Testing");
	});
});