import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "composite-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  faFacebookF = faFacebookF;
  faTwitter  = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faYoutube  = faYoutube;

  ngOnInit() {}
}
