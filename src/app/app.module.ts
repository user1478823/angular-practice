import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app/app.component";

import { CompositeModule } from "./pages/1-composite/1-page/1.composite.module";
import { PageTwo } from "./pages/2-bino/1-page/1.bino.module";
import { PageThree } from "./pages/3-sports/1-page/1.sports.module";
import { PageFour } from "./pages/4-agency/1-page/1.agency.module";
import { PageFive } from "./pages/5-construction/1-page/1.construction.module";
import { PageSix } from "./pages/6-interact/1-page/1.interact.module";
import { PageSeven } from "./pages/7-ubutia/1-page/1.ubutia.module";
import { PageEight } from "./pages/8-page-eight/1-page/1.home.module";


@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompositeModule,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
    PageSix,
    PageSeven,
    PageEight
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
