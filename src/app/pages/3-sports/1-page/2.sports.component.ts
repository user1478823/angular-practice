import { Component, OnInit } from "@angular/core";

@Component({
  template:
    `<sports-header></sports-header> 
    <section-one></section-one>     
    <section-two></section-two>     
    <section-three></section-three> 
    <section-four></section-four>   
    <section-five></section-five>   
    <sports-footer></sports-footer>`
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
