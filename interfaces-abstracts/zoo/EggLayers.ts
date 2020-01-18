'use strict';

import { Animal, Sex, Blood } from "./Animal";

export abstract class EggLayers extends Animal {
    constructor(name: string, age: number, sex: Sex, blood: Blood) {
        super(name, age, sex, blood);
    }

    breed(): string {
        return 'laying eggs';
    }

    abstract feed(): string;
}