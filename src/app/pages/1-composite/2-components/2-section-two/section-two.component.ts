import { Component, OnInit } from "@angular/core";

@Component({
  selector: "section-two",
  templateUrl: "./section-two.component.html",
  styleUrls: ["./section-two.component.scss"]
})
export class SectionTwoComponent implements OnInit {
  constructor() {}

  public bars = [
    { name: "WEB DESIGN", percentage: "90" },
    { name: "DEVELOPMENT", percentage: "80" },
    { name: "PHOTOGRAPHY", percentage: "85" },
    { name: "MARKETING", percentage: "70" }
  ];

  ngOnInit() {}
}
