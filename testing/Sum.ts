'use strict';

export class Sum {
    list: number[];
    constructor(list: number[]) {
        this.list = list;
    }
    sum() {
        let sum = 0;
        for (let i: number = 0; i < this.list.length; i++) {
            sum += this.list[i];
        }
        return sum
    }
}