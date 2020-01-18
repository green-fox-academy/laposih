'use strict';

import { StringedInstrument } from "./StringedInstrument";

export class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Bass Guitar', numberOfStrings);
    }

    sound(): string {
        return 'Duum-duum-duum'
    }

}