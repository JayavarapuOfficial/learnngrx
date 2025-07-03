import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterModel } from './counter.model';
const getCoutnerState = createFeatureSelector<CounterModel>('counter');

export const getCounterSelector = createSelector(
  getCoutnerState,
  (state: CounterModel) => state.counter
);

export const getChannelNameSelector = createSelector(
  getCoutnerState,
  (state: CounterModel) => state.channelName
);
