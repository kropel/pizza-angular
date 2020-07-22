import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "src/app/pizza";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaService } from "src/app/pizza.service";

@Component({
  selector: "app-pizza-item",
  templateUrl: "./pizza-item.component.html",
  styleUrls: ["./pizza-item.component.css"],
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pizzaSvc: PizzaService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.pizza = this.pizzaSvc.getPizza(id);
    }
  }
  delete() {
    this.pizzaSvc.removePizza(this.pizza.id);
  }
}
