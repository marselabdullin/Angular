import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Хочу выучить Angular',
      text: 'Учу компоненты',
      id: 1
    },
    {
      title: 'Следующий блок будет про директивы',
      text: 'И про пайпы',
      id: 2
    },
  ]

  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        ...this.posts[0],
        title: 'Changed!'
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}
