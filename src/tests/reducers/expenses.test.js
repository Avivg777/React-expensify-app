import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: -500,
            description : 'Motorcycle',
            note: 'Not really a motorcycle',
            amount: 80000,
            createdAt: moment(0).add(8, 'days')
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 500,
            note: 'This expense has been refactored for testing purposes'
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([{...expenses[0], ...action.updates}, expenses[1], expenses[2], expenses[3]]);
});

test('Should not edit an expense if it is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'some made up id',
        updates: {
            amount: 500,
            note: 'This expense has been refactored for testing purposes'
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});