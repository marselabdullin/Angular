import {Component} from '@angular/core'
import {interval, Subscription, Observable, Subject} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription
  sub2: Subscription
  sub3: Subscription

  stream$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
    this.sub3 = this.stream$.subscribe((value) => {
      console.log('Subscribe ', value)
    })

    // =====

    const stream$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1)
      }, 1500)

      setTimeout(() => {
        observer.error('Something went wrong')
      }, 2000)

      setTimeout(() => {
        observer.complete()
      }, 2100)

      setTimeout(() => {
        observer.next(2)
      }, 2500)
    })

    this.sub2 = stream$.subscribe(
      (value) => console.log('Next: ',value),
      (error) => console.log('Error: ', error),
      () => console.log('Completed')
    )

    // =====

    const intervalStream$ = interval(1000)

    this.sub = intervalStream$
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => `Mapped value ${value}`)
      )
      .subscribe((value) => console.log(value))
  }

  next() {
    this.counter++
    this.stream$.next(this.counter)
  }

  stop() {
    this.sub.unsubscribe()
    this.sub3.unsubscribe()
  }
}
