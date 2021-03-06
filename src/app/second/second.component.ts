import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ExampleSelectors } from '../store/example.selectors';
import { ExampleActions } from '../store/example.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  count$: Observable<number>;
  message$: Observable<string | undefined>;
  dataLoading$: Observable<boolean>;

  constructor(private store$: Store) { 
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.dataLoading$ = this.store$.select(ExampleSelectors.dataLoading);
  }

  getData(){
    this.store$.dispatch(ExampleActions.getData());
  }

  ngOnInit(): void {
    this.store$.select(ExampleSelectors.giveMealData).subscribe( data => console.log(data));
  }

}
