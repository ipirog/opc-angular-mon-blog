import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post : object;

  constructor() { }

  ngOnInit() {
  }

  getColor(post) {
    if (post.loveIts === 0) return 'list-group-item';
    if (post.loveIts > 0) return 'list-group-item list-group-item-success';
    else return 'list-group-item list-group-item-danger';
  }
}
