import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ExampleSelectors } from '../store/exapmle.selectors';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  count$: Observable<number>;
  message$: Observable<string | undefined>;

  constructor(private store$: Store) { 
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
  }

  ngOnInit(): void {
  }

}
