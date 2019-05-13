import { NgModule }               from "@angular/core";
import { CommonModule }           from "@angular/common";
import { RouterModule }           from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { SportsComponent }          from "./2.sports.component";

import { HeaderComponent }        from "../2-components/0-header/header.component";
import { SectionOneComponent }    from "../2-components/1-section-one/section-one.component";
import { SectionTwoComponent }    from "../2-components/2-section-two/section-two.component";
import { SectionThreeComponent }  from "../2-components/3-section-three/section-three.component";
import { SectionFourComponent }   from "../2-components/4-section-four/section-four.component";
import { SectionFiveComponent }   from "../2-components/5-section-five/section-five.component";
import { SectionFooterComponent } from "../2-components/6-footer/section-footer.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SportsComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionFooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: "three", component: SportsComponent }])
  ]
})
export class PageThree {}
