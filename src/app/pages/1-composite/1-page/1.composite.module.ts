import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { CompositeComponent } from "./2.composite.component";

import { HeaderComponent } from "../2-components/0-header/header.component";
import { SectionOneComponent } from "../2-components/1-section-one/section-one.component";
import { SectionTwoComponent } from "../2-components/2-section-two/section-two.component";
import { SectionThreeComponent } from "../2-components/3-section-three/section-three.component";
import { SectionFourComponent } from "../2-components/4-section-four/section-four.component";
import { SectionFiveComponent } from "../2-components/5-section-five/section-five.component";
import { FooterComponent } from "../2-components/6-footer/footer.component";

@NgModule({
  declarations: [
    CompositeComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: "one", component: CompositeComponent }])
  ]
})
export class CompositeModule {}
