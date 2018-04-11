import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem }             from "../../models/timeline-item";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input()
  public title: string = "";

  @Input()
  public subtitle: string = "";

  @Input()
  public items: Array<TimelineItem>;

  constructor() {
  }

  ngOnInit() {
    console.log(this.items);
  }

  private test() {
    this.items.push(new TimelineItem());
    this.items.push(new TimelineItem());
    this.items.push(new TimelineItem());
    this.items.push(new TimelineItem());
  }

}
