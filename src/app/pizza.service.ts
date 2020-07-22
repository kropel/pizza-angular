import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaResponse, Pizza } from "./pizza";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PizzaService {
  pizzas: Pizza[] = [];
  apiUrl = "https://ng-pizza.azurewebsites.net/api/pizzas";

  pizzasEmiter = new EventEmitter<Pizza[]>();

  constructor(private http: HttpClient) {
    this.http.get<PizzaResponse>(this.apiUrl).subscribe((response) => {
      this.pizzas = response.value;
      this.pizzasEmiter.emit(this.pizzas);
      console.log("zaciągneło pizze z api");
    });
  }

  getPizzas(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>(this.apiUrl);
  }
  getPizza(id) {
    id = Number(id);
    return this.pizzas.find((pizza) => pizza.id === id);
  }

  addPizza(pizza: Pizza) {
    return this.http.post<Pizza>(this.apiUrl, pizza);
  }

  removePizza(pizzaId: number) {
    return this.http.delete<Pizza>(`${this.apiUrl}/${pizzaId}`);
    this.getPizzas();
    this.pizzasEmiter.emit(this.pizzas);
  }
  updatePizza(pizza: Pizza) {
    return this.http.put<Pizza>(`${this.apiUrl}/${pizza.id}`, pizza);
  }
}
