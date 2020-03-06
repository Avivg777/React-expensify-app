
// Set text filter action

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Set sort by amount action

export const sortByAmount = () => ({
    type: 'FILTER_BY_AMOUNT'
});

// Set sort by date action

export const sortByDate = () => ({
    type: 'FILTER_BY_DATE'
});

// Set start date action

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

// Set end date action

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});