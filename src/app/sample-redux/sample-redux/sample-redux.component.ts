import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectCurrentCount} from "../redux/selector";
import {SampleState} from "../redux/reducers";
import {decreaseAction, increaseAction, resetAction, setCurrentValue} from "../redux/actions";

@Component({
  selector: 'app-sample-redux',
  templateUrl: './sample-redux.component.html',
  styleUrl: './sample-redux.component.scss'
})
export class SampleReduxComponent {
  currentValue$ = this.store.pipe(select(selectCurrentCount));

  constructor(private store: Store<{ sample: SampleState }>) {
  }

  increase() {
    this.store.dispatch(increaseAction());
  }

  decrease() {
    this.store.dispatch(decreaseAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }

  set(val: string) {
    this.store.dispatch(setCurrentValue({newValue: Number(val)}));
  }
}
