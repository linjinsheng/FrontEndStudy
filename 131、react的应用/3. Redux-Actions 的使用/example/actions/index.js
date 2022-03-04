// export const increment = () => ({type: 'INCREMENT'});
// export const decrement = () => ({type: 'DECREMENT'});

import { createAction } from 'redux-actions';
export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');