import { Component, OnInit ,Input } from '@angular/core';
import { Topic } from "app/topic";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() feedArray : Topic;

  constructor() { }

  ngOnInit() {
  }

}
