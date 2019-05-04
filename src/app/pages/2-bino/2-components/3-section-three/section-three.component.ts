import { Component, OnInit } from "@angular/core";

import {
  faFillDrip,
  faFeatherAlt,
  faCameraRetro
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-three",
  templateUrl: "./section-three.component.html",
  styleUrls: ["./section-three.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionThreeComponent implements OnInit {
  constructor() {}

  faFillDrip    = faFillDrip;
  faFeatherAlt   = faFeatherAlt;
  faCameraRetro   = faCameraRetro;

  ngOnInit() {}
}
