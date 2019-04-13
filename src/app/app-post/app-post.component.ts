import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './app-post.component.html',
  styleUrls: ['./app-post.component.scss']
})
export class AppPostComponent implements OnInit {

  @Input() post : object;

  constructor() { }

  ngOnInit() {
  }
  getColor(post) {
    if (post.loveIts === 0) return 'white';
    if (post.loveIts > 0) return 'lightgreen';
    else return 'lightpink';
  }
}
