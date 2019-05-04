import { Component, OnInit } from "@angular/core";
import {
  faCopy,
  faCode,
  faLightbulb,
  faComments
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-one",
  templateUrl: "./section-one.component.html",
  styleUrls: ["./section-one.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionOneComponent implements OnInit {
  constructor() {}

  faCopy = faCopy;
  faCode    = faCode;
  faLightbulb   = faLightbulb;
  faComments   = faComments;

  ngOnInit() {}
}
