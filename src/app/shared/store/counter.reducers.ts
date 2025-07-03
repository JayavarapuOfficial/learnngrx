import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  change_channel_name_actiion,
  custom_Increment_Action,
  decrement_Action,
  increment_Action,
  reset_Action,
} from './counter.actions';

export const counterReducer = (state: any, aciton: any) => {
  return _counterReducer(state, aciton);
};
const _counterReducer = createReducer(
  initialState,
  on(increment_Action, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement_Action, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset_Action, (state) => ({
    ...state,
    counter: 0,
    channelName: 'Angular NGRX Channel',
  })),
  on(custom_Increment_Action, (state, action) => ({
    ...state,
    counter:
      action.action_type === 'add'
        ? state.counter + action.value
        : state.counter - action.value,
  })),
  on(change_channel_name_actiion, (state) => ({
    ...state,
    channelName: 'Welcome to the Angular NGRX Channel',
  }))
);
