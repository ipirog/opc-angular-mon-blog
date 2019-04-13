import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-blog';

  posts = [
    {title:"titre1", content:"content1", loveIts:0, create_at:new Date()},
    {title:"titre2", content:"content2", loveIts:0, create_at:new Date()},
    {title:"titre3", content:"content3", loveIts:0, create_at:new Date()},
    {title:"titre4", content:"content4", loveIts:0, create_at:new Date()}
  ]
}
