import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faYoutube
} from "@fortawesome/fontawesome-free-brands";

@Component({
  selector: "sports-footer",
  templateUrl: "./section-footer.component.html",
  styleUrls: ["./section-footer.component.scss", "./../../1-page/fonts.scss"]
})
export class SectionFooterComponent implements OnInit {
  constructor() {}

  faFacebookF = faFacebookF;
  faTwitter   = faTwitter;
  faPinterest = faPinterest;
  faYoutube   = faYoutube;

  ngOnInit() {}
}
