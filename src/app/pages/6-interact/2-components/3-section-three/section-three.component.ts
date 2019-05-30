import { Component, OnInit } from "@angular/core";
import {
  faCode,
  faTerminal,
  faLeaf,
  faBurn,
  faBroom,
  faComment
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-three",
  templateUrl: "./section-three.component.html",
  styleUrls: ["./section-three.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionThreeComponent implements OnInit {
  constructor() {}

  faCode      = faCode;
  faTerminal  = faTerminal;
  faLeaf      = faLeaf;
  faBroom     = faBroom;
  faBurn      = faBurn;
  faComment   = faComment;

  ngOnInit() {}
}
