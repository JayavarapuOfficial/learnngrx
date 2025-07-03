import { createAction, props } from '@ngrx/store';

export const increment_Action = createAction('INCREMENT_ACTION');
export const decrement_Action = createAction('DECREMENT_ACTION');
export const reset_Action = createAction('RESET_ACTION');

export const custom_Increment_Action = createAction(
  'CUSTOM_INCREMENT_ACTION',
  props<{
    value: number;
    action_type: string;
  }>()
);
export const custom_Decrement_Action = createAction(
  'CUSTOM_DECREMENT_ACTION',
  props<{ value: number; action_type: string }>()
);

export const change_channel_name_actiion = createAction('CHANGE_CHANNEL_NAME');
