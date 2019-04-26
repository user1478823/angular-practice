import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app/app.component";

import { PageOne } from "./pages/1-page-one/1-page/1.home.module";
import { PageTwo } from "./pages/2-page-two/1-page/1.home.module";
import { PageThree } from "./pages/3-page-three/1-page/1.home.module";
import { PageFour } from "./pages/4-page-four/1-page/1.home.module";
import { PageFive } from "./pages/5-page-five/1-page/1.home.module";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
