import { Component } from "@angular/core";

interface Box {
  hasCircle: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  boxList: Box[] = [];
  circlePosition: number;
  lastCirclePosition: number;

  constructor() {
    
    this.lastCirclePosition = 0;
    this.boxList = [
      {
        hasCircle: true
      },
      {
        hasCircle: false
      },
      {
        hasCircle: false
      },
      {
        hasCircle: false
      }
    ];
  }

  selectBox(index: number) {
    // search last circle position
    this.lastCirclePosition = this.getLastCirclePosition();

    // remove the circle in the latest position
    this.boxList[this.lastCirclePosition].hasCircle = false;

    // set the new circle position
    this.boxList[index].hasCircle = true;
  }

  getLastCirclePosition() {
    for (const [i, box] of this.boxList.entries()) {
      if (box.hasCircle) return i;
    }
    return 0;
  }
}
