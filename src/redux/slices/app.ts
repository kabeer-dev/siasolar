import {createSlice, PayloadAction, ThunkAction} from '@reduxjs/toolkit';
import {AppState} from '@/types/redux';

// ----------------------------------------------------------------------
const defaultState = {};

const slice = createSlice({
  name: 'Project-Name',
  initialState: defaultState,
  reducers: {},
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;
