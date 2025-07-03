import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { getCounterSelector } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterbutton',
  standalone: false,

  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css',
})
export class CounterbuttonComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {}

  handleIncrement() {
    this.store.dispatch({ type: 'INCREMENT_ACTION' });
  }
  handleDecrement() {
    this.store.dispatch({ type: 'DECREMENT_ACTION' });
  }
  handleReset() {
    this.store.dispatch({ type: 'RESET_ACTION' });
  }
  handleRename() {
    this.store.dispatch({ type: 'CHANGE_CHANNEL_NAME' });
  }
}
