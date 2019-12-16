'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    static defaultInkAmount = 100;

    constructor(color: string, width: number, inkAmount: number = Sharpie.defaultInkAmount) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
        //this.inkAmount = 100;  nem kerem be, mert mindig 100!!
    }

    public use(): void {
        this.inkAmount -= 1;
      }
}

let redSharpie = new Sharpie('red', 10);
console.log(redSharpie);
redSharpie.use();
console.log(redSharpie);