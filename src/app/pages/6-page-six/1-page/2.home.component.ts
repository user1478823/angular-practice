import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template:
    "<page-header></page-header>"     +
    "<section-one></section-one>"     +
    "<section-two></section-two>"     +
    "<section-three></section-three>" +
    "<section-four></section-four>"   +
    "<section-five></section-five>"   +
    "<section-six></section-six>"     +
    "<section-seven></section-seven>" +
    "<page-footer></page-footer>",
  styleUrls: ["./3.home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
