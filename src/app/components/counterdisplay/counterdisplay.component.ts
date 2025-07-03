import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import {
  getChannelNameSelector,
  getCounterSelector,
} from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  standalone: false,

  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css',
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  channelName: string = '';
  coutnerStateSubscribe!: Subscription;
  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.coutnerStateSubscribe = this.store
      .select(getCounterSelector)
      .subscribe((state) => {
        this.counterDisplay = state;
        console.log('state retrieved from CounterDisplay component');
      });
    this.store.select(getChannelNameSelector).subscribe((state) => {
      this.channelName = state;
      console.log('state retrieved for channel name');
    });
  }
  ngOnDestroy(): void {
    if (this.coutnerStateSubscribe) {
      this.coutnerStateSubscribe.unsubscribe();
    }
  }
}
