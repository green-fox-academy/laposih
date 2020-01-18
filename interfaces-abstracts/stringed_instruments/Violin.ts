'use strict';

import { StringedInstrument } from "./StringedInstrument";

export class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Violin', numberOfStrings);
    }

    sound(): string {
        return 'Screech'
    }

}