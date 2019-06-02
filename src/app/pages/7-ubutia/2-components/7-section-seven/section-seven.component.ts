import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "section-seven",
  templateUrl: "./section-seven.component.html",
  styleUrls: ["./section-seven.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionSevenComponent implements OnInit {
  constructor() {}

  faFacebookF   = faFacebookF;
  faTwitter     = faTwitter;

  ngOnInit() {}
}
