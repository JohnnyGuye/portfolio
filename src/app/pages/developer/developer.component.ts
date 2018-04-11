import { Component, OnInit } from '@angular/core';
import { RequestService }   from "../../services/request/request.service";

import { TimelineItem }             from "../../models/timeline-item";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public tlitems: Array<TimelineItem>;

  constructor(private request: RequestService) {
    this.tlitems = [];
  }

  ngOnInit() {
    this.request.get("assets/jsonfiles/developer.json").subscribe(
      r=> {
        r["timelineItems"].forEach(a=>this.tlitems.push(TimelineItem.parse(a)));
        console.log(this.tlitems);
      });
  }

}
