import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <main>
      <page-header></page-header>
      <section-one></section-one>
      <section-two></section-two>
      <section-three></section-three>
      <section-four></section-four>
      <section-five></section-five>
      <page-footer></page-footer>
    </main>
  `,
  styleUrls: ["./3.composite.component.scss"]
})
export class CompositeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
