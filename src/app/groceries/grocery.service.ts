import { Injectable } from "@angular/core";
import { Grocery } from "./models/grocery.interface";

@Injectable({
  providedIn: "root"
})
export class GorceryService {
  groceries: Grocery[];

  constructor() {
    this.groceries = [
      {
        name: "Milk"
      },
      {
        name: "Cheese"
      },
      {
        name: "Water"
      },
      {
        name: "Flour"
      }
    ];
  }

  getGroceryList(): Grocery[] {
    return this.groceries;
  }
}
