import { Component, OnInit } from "@angular/core";

@Component({
  template:
    `<agency-header></agency-header>     
    <section-one></section-one>     
    <section-two></section-two>     
    <section-three></section-three> 
    <section-four></section-four>   
    <section-five></section-five>   
    <section-six></section-six>     
    <section-seven></section-seven> 
    <agency-footer></agency-footer>` 
})
export class AgencyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
