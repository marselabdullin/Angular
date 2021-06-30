import {Component} from '@angular/core'
import {PostsService} from "../shared/posts.service";
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  posts$: Observable<Post[]>

  constructor(private postService: PostsService) {
    this.posts$ = this.postService.getAll()
  }
}
