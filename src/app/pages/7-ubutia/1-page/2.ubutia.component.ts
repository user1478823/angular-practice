import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template:
    `<ubutia-header></ubutia-header>     
    <section-one></section-one>         
    <section-three></section-three> 
    <section-two></section-two>    
    <section-four></section-four>   
    <section-five></section-five>   
    <section-six></section-six>     
    <section-seven></section-seven> 
    <ubutia-footer></ubutia-footer>`
})
export class UbutiaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
