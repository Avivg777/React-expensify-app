import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
});