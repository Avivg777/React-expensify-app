import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../Components/ExpenseListItem/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render a single expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);

    expect(wrapper).toMatchSnapshot();
});