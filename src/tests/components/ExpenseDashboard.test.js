import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardComponent from '../../Components/ExpenseDashboard/ExpenseDashboard';

test('Should render ExpenseDashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardComponent />);

    expect(wrapper).toMatchSnapshot();
});