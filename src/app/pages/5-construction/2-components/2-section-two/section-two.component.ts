import { Component, OnInit } from "@angular/core";
import {
  faSeedling,
  faStopwatch,
  faUsers,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-two",
  templateUrl: "./section-two.component.html",
  styleUrls: ["./section-two.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionTwoComponent implements OnInit {
  constructor() {}

  faSeedling = faSeedling;
  faStopwatch    = faStopwatch;
  faUsers   = faUsers;
  faChartLine   = faChartLine;

  ngOnInit() {}
}
