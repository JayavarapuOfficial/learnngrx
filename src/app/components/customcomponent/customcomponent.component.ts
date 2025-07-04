import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custom_Increment_Action } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';
import { getCounterSelector } from '../../shared/store/counter.selector';
import { AppstateModel } from '../../shared/store/global/app.state.model';

@Component({
  selector: 'app-customcomponent',
  standalone: false,

  templateUrl: './customcomponent.component.html',
  styleUrl: './customcomponent.component.css',
})
export class CustomcomponentComponent implements OnInit {
  counterInput!: number;
  actionType: string = 'add';
  constructor(private store: Store<AppstateModel>) {}
  ngOnInit(): void {}
  handleCustomIncrement() {
    this.store.dispatch(
      custom_Increment_Action({
        value: +this.counterInput,
        action_type: this.actionType,
      })
    );
  }
}
