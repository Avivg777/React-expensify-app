import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'Rent',
        amount: 150,
        note: '',
        createdAt: moment(0).valueOf()
    },
    {
        id: 2,
        description: 'Cream',
        amount: 2000,
        note: 'note number 2',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: 'JS Course',
        amount: 600,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: 4,
        description: 'Heater',
        amount: 5500,
        note: 'note number 4',
        createdAt: moment(0).subtract(6, 'days').valueOf()
    }
];

export default expenses;