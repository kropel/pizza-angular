import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PizzaComponent } from "./pizza/pizza.component";
import { PizzaItemComponent } from "./pizza/pizza-item/pizza-item.component";
import { PizzaEditorComponent } from "./pizza-editor/pizza-editor.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PizzaComponent,
  },
  { path: "edit", component: PizzaEditorComponent },
  { path: "pizza/:id", component: PizzaItemComponent },
  { path: "edit/:id", component: PizzaEditorComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
