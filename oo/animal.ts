'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    hungerValue: number;
    thirstValue: number;

    static defaultHunger = 50;
    static defaultThirst = 50;

    constructor(hunger: number = Animal.defaultHunger, thirst: number = Animal.defaultThirst) {
        this.hungerValue = hunger;
        this.thirstValue = thirst;
    }

    // constructor() {
    //     this.hungerValue = hunger;
    //     this.thirstValue = thirst;
    // }   kivulrol nem lehetallitgatni

    public eat(): void {
        this.hungerValue -= 1; //this.hunger--;
      }

    public drink(): void {
        this.thirstValue -= 1;
      }

    public play(): void {
        this.hungerValue += 1;
        this.thirstValue += 1;
    }
}

let tiger = new Animal();
console.log(tiger);
tiger.eat();
console.log(tiger);

