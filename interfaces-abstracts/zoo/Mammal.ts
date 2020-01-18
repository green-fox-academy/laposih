'use strict';

import { Animal, Sex, Blood } from "./Animal";

export class Mammal extends Animal {
    constructor(name: string, age?: number, sex?: Sex, blood?: Blood) {
        super(name, age, sex, blood);
    }

    breed(): string {
        return 'giving birth';
    }

    feed(): string {
        return 'mother\'s milk'
    }
}