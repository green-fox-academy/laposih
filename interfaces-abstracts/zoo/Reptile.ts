'use strict';

import { Sex, Blood } from "./Animal";
import { EggLayers } from "./EggLayers";

export class Reptile extends EggLayers {
    constructor(name: string, age?: number, sex?: Sex, blood?: Blood) {
        super(name, age, sex, blood);
    }

    feed(): string {
        return 'waiting for them to hunt'
    }
}