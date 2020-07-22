import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SlicePipe } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { DotsPipe } from "./dots.pipe";
import { AppComponent } from "./app.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza/pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PizzaService } from "./pizza.service";
import { NotFoundComponent } from './not-found/not-found.component';

// TODO 1: Dodaj komponent PizzaItem za pomoca Angular CLI: ng g c pizza-item
// TODO 2: Dodaj komponent PizzaEditor za pomoca Angular CLI: ng g c pizza-editor

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaItemComponent,
    PizzaEditorComponent,
    DotsPipe,
    NavBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [SlicePipe, PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
