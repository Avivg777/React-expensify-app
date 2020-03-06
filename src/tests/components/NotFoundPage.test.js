import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../Components/NotFoundPage/NotFoundPage';

test('Should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
});