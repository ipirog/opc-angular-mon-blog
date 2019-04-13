import { Component } from '@angular/core';
import { Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Controleur de l'application
 */
export class AppComponent {
  title = 'mon-premier-blog';

  posts = [
    new Post("titre1", "content1", 0),
    new Post("titre2", "content2", 0),
    new Post("titre3", "content3", 0),
    new Post("titre4", "content4", 0),
  ]
}
