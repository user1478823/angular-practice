import { NgModule }               from "@angular/core";
import { CommonModule }           from "@angular/common";
import { RouterModule }           from "@angular/router";

import { InteractComponent }          from "./2.interact.component";

import { HeaderComponent }        from "../2-components/0-header/header.component";
import { SectionOneComponent }    from "../2-components/1-section-one/section-one.component";
import { SectionTwoComponent }    from "../2-components/2-section-two/section-two.component";
import { SectionThreeComponent }  from "../2-components/3-section-three/section-three.component";
import { SectionFourComponent }   from "../2-components/4-section-four/section-four.component";
import { SectionFiveComponent }   from "../2-components/5-section-five/section-five.component";
import { SectionSixComponent }    from "../2-components/6-section-six/section-six.component";
import { SectionSevenComponent }  from "../2-components/7-section-seven/section-seven.component";
import { SectionFooterComponent } from "../2-components/8-footer/footer.component";

@NgModule({
  declarations: [
    InteractComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
    SectionSevenComponent,
    SectionFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "six", component: InteractComponent }])
  ]
}) 
export class PageSix {}
