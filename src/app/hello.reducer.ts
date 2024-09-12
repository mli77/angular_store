import { Action, createReducer } from '@ngrx/store';

const initialState: string = 'Hello Store';
 
export const messageReducer = createReducer(
  initialState
);

