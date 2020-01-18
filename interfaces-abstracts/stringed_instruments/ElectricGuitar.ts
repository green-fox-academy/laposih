'use strict';

import { StringedInstrument } from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', numberOfStrings);
    }

    sound(): string {
        return 'Twang'
    }

}