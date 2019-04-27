import { Component, OnInit } from "@angular/core";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "section-five",
  templateUrl: "./section-five.component.html",
  styleUrls: ["./section-five.component.scss"]
})
export class SectionFiveComponent implements OnInit {
  constructor() {}

  faPhone     = faPhone;
  faEnvelope  = faEnvelope;
  faGlobe     = faGlobe;
  faMapMarker = faMapMarker;

  ngOnInit() {}
}
