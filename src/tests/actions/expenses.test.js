import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should return remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should return an edited expense object', () => {
    const updates = {
        amount: '001',
        description: 'This is a test description',
        note: 'This is a test note'
    }
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates
    })
});

test('Should return an add expense object with asserted values', () => {
    const expenseData = {
        id: expect.any(String),
        description: 'This is a test description',
        amount: '001',
        note: 'This is a test note',
        createdAt: '1000'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    })
});

test('Should return an add object with default values', () => {
    const defaultValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultValues,
            id: expect.any(String)
        }
    });
});