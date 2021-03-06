import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <main>
      <composite-header></composite-header>
      <section-one></section-one>
      <section-two></section-two>
      <section-three></section-three>
      <section-four></section-four>
      <section-five></section-five>
      <composite-footer></composite-footer>
    </main>
  `
})
export class CompositeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
