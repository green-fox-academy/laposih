'use strict';

import { Printable } from "./Printable";

export class Domino implements Printable {
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }

    printAllFields(): void {
        console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`);
    }

}

