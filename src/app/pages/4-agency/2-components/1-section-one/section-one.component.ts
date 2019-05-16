import { Component, OnInit } from "@angular/core";
import {
  faShoppingCart,
  faLaptop,
  faLock,
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
  faShoppingCart        = faShoppingCart;
  faLaptop      = faLaptop;
  faLock        = faLock;
  faLightbulb   = faLightbulb;
  faComments    = faComments;

  ngOnInit() {}
}
