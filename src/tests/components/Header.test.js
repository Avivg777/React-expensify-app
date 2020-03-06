import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../Components/Header/Header';

test('Should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
});