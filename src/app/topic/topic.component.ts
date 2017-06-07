import { Topic } from './../topic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  topic = Topic;

  constructor() { }

  ngOnInit() {
  }

}
