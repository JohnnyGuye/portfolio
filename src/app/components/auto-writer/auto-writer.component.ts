import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auto-writer',
  templateUrl: './auto-writer.component.html',
  styleUrls: ['./auto-writer.component.css']
})
export class AutoWriterComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  /** Speed of the text in character per second **/
  set speed(speed: number) {
    this._delay = Math.min(1/speed, 1000);
  }

  @Input()
  set delay(delay: number) {
    this._delay = Math.max(delay, 1);
  }

  private _delay: number = 100;

  @Input()
  /** Jitter for the delay **/
  set jitter(jitterRatio: number) {
    this._jitter = Math.max(0,Math.min(1, jitterRatio));
  }
  private  _jitter: number = .5;

  /** The text displayed on the screen **/
  public displayText: string = "";

  private _current: number = 0;

  constructor() { }

  ngOnInit() {
    this.type();
  }

  type() {
    // If the current count is larger than the length of the string, then for goodness sake, stop
  	if(this._current >= this.text.length){
  		setTimeout(() => {},3000);
  	}
  	else{
  		this.displayText += this.text[this._current++];
      // Wait ...
  		setTimeout(() => this.type(), this._delay + (Math.random()*this._delay)*(this._jitter*2 - 1));
  	}
  }
}
