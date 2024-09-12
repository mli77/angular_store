import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  helloObserver$: Observable<string>;

  constructor(private helloStore: Store<{ message: string }>) {
    this.helloObserver$ = helloStore.select('message');
  }

}
