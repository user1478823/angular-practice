import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template:
    `<interact-header></interact-header>     
    <section-one></section-one>     
    <section-two></section-two>     
    <section-three></section-three> 
    <section-four></section-four>   
    <section-five></section-five>   
    <section-six></section-six>     
    <section-seven></section-seven> 
    <interact-footer></interact-footer>`
})
export class InteractComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
