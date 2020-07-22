import { Component, OnInit } from "@angular/core";
import { PizzaService } from "../pizza.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit() {
    this.pizzas = this.pizzaSvc.pizzas;
    this.pizzaSvc.pizzasEmiter.subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }

  addPizza() {
    // this.pizzaSvc
    //   .addPizza({
    //     name: "testPizza",
    //     description: "testtest",
    //   })
    //   .subscribe((_) => {
    //     this.pizzaSvc.getPizzas().subscribe((response) => {
    //       console.log(response);
    //       this.pizzas = response.value;
    //     });
    //   });
  }

  updatePizza(pizzaId: number) {
    // ... http.put
  }
}
