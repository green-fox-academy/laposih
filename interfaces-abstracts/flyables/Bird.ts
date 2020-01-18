// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

'use strict';

import { Flyable } from "./Flyable";
import { Animal, Sex, Blood } from "../zoo/Animal";

export class Bird extends Animal implements Flyable {
    constructor(name: string, age?: number, sex?: Sex, blood?: Blood) {
        super(name, age, sex, blood)
    }

    feed(): string {
        return 'regurgitating their meals'
    }

    breed(): string {
        return 'laying eggs';
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