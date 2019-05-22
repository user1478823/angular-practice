import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template:
    `<construction-header></construction-header>     
    <section-one></section-one>     
    <section-two></section-two>     
    <section-three></section-three> 
    <section-four></section-four>   
    <section-five></section-five>   
    <section-six></section-six>     
    <section-seven></section-seven> 
    <construction-footer></construction-footer>`
})
export class ConstructionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
