import {Component, OnInit} from '@angular/core'
import {Observable} from "rxjs";

export interface Post {
  title: string
  text: string
}

export type PostFields = 'title' | 'text'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 4000)
  })

  myDate$: Observable<Date> = new Observable<Date>((obs) => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  myDate: Date = new Date()

  ngOnInit() {
    this.myDate$.subscribe((date) => {
      this.myDate = date
    })
  }

  searchField: PostFields = 'title'

  search = ''

  posts: Post[] = [
    {title: 'Beer', text: 'This is beer post! 123'},
    {title: 'Bread', text: 'This is bread post! 345'},
    {title: 'JS', text: 'This is JS post! 567'},
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular 12',
      text: 'Angular 12 course'
    })
  }

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  float: number = 0.42

  date: Date = new Date()

  e = Math.E

  str = 'hello world'
}
