'use strict';

export abstract class Vehicle {
    name: string;
    type: string;
    numberOfWheels: number;

    constructor(name: string, type: string, numberOfWheels: number) {
        this.name = name;
        this.type = type;
        this.numberOfWheels = numberOfWheels;
    }

}