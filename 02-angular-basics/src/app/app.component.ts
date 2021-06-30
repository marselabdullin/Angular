import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  now: Date = new Date()

  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {
      title: 'Post 1',
      author: 'Mars',
      comments: [
        {name: 'Max', text: 'Lorem 1'},
        {name: 'Max', text: 'Lorem 2'},
        {name: 'Max', text: 'Lorem 3'},
      ]
    },
    {
      title: 'Post 2',
      author: 'Max',
      comments: [
        {name: 'Mars', text: 'Lorem 5'},
        {name: 'Mars', text: 'Lorem 7'},
        {name: 'Mars', text: 'Lorem 9'},
      ]
    },
  ]

  toggle = false

  backgrountToggle = false

  title = 'Dynamic title'
  number = 42
  array = [1, 2, 3]
  img = 'https://miro.medium.com/max/300/1*AEXBkoVG-n6RjpQELc8Pmg.png'
  inputValue = ''

  constructor() {
    setTimeout(() => {
      this.img = 'https://hsto.org/getpro/habr/post_images/f49/871/ec1/f49871ec14fb540fb98916a074366059.png'
    }, 5000)
  }

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onClick() {
    console.log('click')
  }
}
