import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Footer", () => {
	it("should render properly with the year prop", () => {
		const component = shallow(<Footer year="2018"/>);
		expect(component).toMatchSnapshot();
	});
	
	it("should render properly with the year prop 2019", () => {
		const component = shallow(<Footer year="2019"/>);
		expect(component).toMatchSnapshot();
	});
});