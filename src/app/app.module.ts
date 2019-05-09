import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app/app.component";

import { CompositeModule } from "./pages/1-composite/1-page/1.composite.module";
import { PageTwo } from "./pages/2-bino/1-page/1.bino.module";
import { PageThree } from "./pages/3-sports/1-page/1.sports.module";
import { PageFour } from "./pages/4-page-four/1-page/1.home.module";
import { PageFive } from "./pages/5-page-five/1-page/1.home.module";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompositeModule,
    PageTwo,
    PageThree,
    PageFour,
    PageFive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
