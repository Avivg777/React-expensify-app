import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../Components/ExpenseList/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);

    expect(wrapper).toMatchSnapshot();
});