import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "agency-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss", "./../../1-page/fonts.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  faFacebookF   = faFacebookF;
  faTwitter     = faTwitter;
  faLinkedinIn  = faLinkedinIn;

  ngOnInit() {}
}
