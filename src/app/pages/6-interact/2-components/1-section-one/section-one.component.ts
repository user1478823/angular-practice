import { Component, OnInit } from "@angular/core";
import {
  faLeaf,
  faBurn,
  faBroom,
  faComment
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-one",
  templateUrl: "./section-one.component.html",
  styleUrls: ["./section-one.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionOneComponent implements OnInit {
  constructor() {}

  faLeaf      = faLeaf;
  faBroom     = faBroom;
  faBurn      = faBurn;
  faComment   = faComment;

  ngOnInit() {}
}
