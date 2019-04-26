import { Component, OnInit } from "@angular/core";
import {
  faLaptop,
  faCog,
  faFont,
  faUser
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-one",
  templateUrl: "./section-one.component.html",
  styleUrls: ["./section-one.component.scss"]
})
export class SectionOneComponent implements OnInit {
  constructor() {}

  faLaptop = faLaptop;
  faCog    = faCog;
  faFont   = faFont;
  faUser   = faUser;

  ngOnInit() {}
}
