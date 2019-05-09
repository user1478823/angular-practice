import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "bino-footer",
  templateUrl: "./section-footer.component.html",
  styleUrls: ["./section-footer.component.scss"]
})
export class SectionFooterComponent implements OnInit {
  constructor() {}

  faFacebookF = faFacebookF;
  faTwitter  = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faYoutube  = faYoutube;

  ngOnInit() {}
}
