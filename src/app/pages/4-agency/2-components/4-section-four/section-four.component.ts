import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "section-four",
  templateUrl: "./section-four.component.html",
  styleUrls: ["./section-four.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionFourComponent implements OnInit {
  constructor() {}

  faFacebookF = faFacebookF;
  faTwitter  = faTwitter;
  faLinkedinIn = faLinkedinIn;

  ngOnInit() {}
}
