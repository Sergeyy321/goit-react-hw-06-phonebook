// export const filterReducer = () => {};
// const initialFilter = {
//     filters:''
// }

// export const addContact = contact => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });
// export const SET_FILTER = 'SET_FILTER';
// export const deleteContact = contactId => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

// export const setFilter = filter => ({
//   type: SET_FILTER,
//   payload: filter,
// });
import {  createSlice } from '@reduxjs/toolkit';

// export const setFilter = createAction('SET_FILTER');
const initialState = { 
  filter: '',
}

// export const filterReducer = createReducer(initialState, builder =>
//   builder.addCase(setFilter, (state,action) => {
//     return action.payload
//   })
// );

const slice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {setFilter(state,action)  {
    return action.payload
  },},
})
export const { setFilter } = slice.actions
export const { filterReducer } = slice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// export const sliceFilter = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     qwery(state, action) {
//       return (state = action.payload);
//     },
//     filter(state, action) {},
//   },
// });

// export const { qwery } = sliceFilter.actions;


