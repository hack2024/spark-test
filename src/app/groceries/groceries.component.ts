import { Component, OnInit } from "@angular/core";
import { GorceryService } from "./grocery.service";
import { Grocery } from "./models/grocery.interface";

@Component({
  selector: "app-groceries",
  templateUrl: "./groceries.component.html",
  styleUrls: ["./groceries.component.css"]
})
export class GroceriesComponent implements OnInit {
  groceries: Grocery[];
  groceriesLength = 0;
  constructor(private groceryService: GorceryService) {}

  ngOnInit() {
    this.groceries = this.groceryService.getGroceryList();
    this.groceriesLength = this.groceries.length;
  }

  move(isDown: boolean, index: number) {
    if (isDown) {
      if (index === this.groceriesLength - 1) {
        const aux = this.groceries[0];
        this.groceries[0] = this.groceries[this.groceriesLength - 1];
        this.groceries[index] = aux;
      } else {
        const aux = this.groceries[index];
        this.groceries[index] = this.groceries[index + 1];
        this.groceries[index + 1] = aux;
      }
    }
  }
}
