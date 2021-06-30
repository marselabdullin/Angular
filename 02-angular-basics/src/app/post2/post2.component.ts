import { Component } from '@angular/core';

@Component({
  selector: 'app-post2',
  template: `
    <div class="post">
      <h2>Post 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quibusdam!</p>
    </div>
  `,
  styles: [`
    .post {
      padding: 20px;
      border: 1px solid darkgoldenrod;
    }
  `]
})
export class Post2Component {
}
