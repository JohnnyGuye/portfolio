export class TimelineItem {
  title: string;
  subtitle: string;
  begindate: Date;
  enddate: Date;

  htmltext: string;
  imgurl: string;

  externalLink: string;

  constructor() {

  }

  get duration() : string {
    //TODO
    return "A certain amount of time"
  }

  get textOnly() {
    //TODO
    return this.htmltext;
  }

  parse(obj: any) {
    this.title      = obj.title || "";
    this.subtitle   = obj.subtitle || "";
    this.begindate  = new Date(obj.begindate || Date.now());
    this.enddate    = new Date(obj.enddate || Date.now());

    this.htmltext   = obj.htmltext || obj.text || "Insert text";
    this.imgurl     = obj.imgurl || "http://placehold.it/1000x500";
    this.externalLink = obj.externalLink || "";

  }

  static parse(obj: any) {
    let ti = new TimelineItem();
    ti.parse(obj);
    return ti;
  }
}
