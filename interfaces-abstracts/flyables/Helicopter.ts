// Extend Helicopter class from Vehicle
// implement your Flyable interface

'use strict';

import { Vehicle } from "./Vehicle";
import { Flyable } from "./Flyable";

class Helicopter extends Vehicle implements Flyable {
    constructor(name: string, type: string, numberOfWheels: number) {
        super(name, type, numberOfWheels);
    }

    land(): string {
        return 'I\'m landing.';
    }

    fly(): string {
        return 'I\'m flying.';
    }

    takeOff(): string {
        return 'I\'m taking off.';    }
}