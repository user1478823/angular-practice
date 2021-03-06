import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <main>
      <bino-header></bino-header>
      <section-one></section-one>
      <section-two></section-two>
      <section-three></section-three>
      <section-four></section-four>
      <section-five></section-five>
      <section-six></section-six>
      <section-seven></section-seven>
      <section-eight></section-eight>
      <bino-footer></bino-footer>
    </main>
  `
})
export class BinoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
