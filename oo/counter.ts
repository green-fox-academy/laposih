'use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    integer: number;

    static defaultValue = 0;
    private initialValue: number;

    constructor(number: number = Counter.defaultValue){
        this.integer = number;
        this.initialValue = this.integer;
    }

    public add(number: number = 1): void {
        this.integer += number;
    }

    //public add(number?: number): void {
    //    if (number === undefined) {
    //        this.integer += 1;
    //    } else { 
    //        this.integer += number;
    //    }
    // }

    public get(): string {
        return this.integer.toString();
    }

    public reset(): void {
        this.integer = this.initialValue;
    }
}

let counter1 = new Counter();
let counter2 = new Counter(3);
console.log(counter1);
console.log(counter2);
counter1.add();
counter2.add(3);
console.log(counter1);
console.log(counter2);
console.log(counter2.get());
counter2.reset();
console.log(counter2);

