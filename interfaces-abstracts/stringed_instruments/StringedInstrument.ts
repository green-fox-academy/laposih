'use strict';

import { Instrument } from "./Instrument";

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    constructor(name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound(): void

    play(): void {
        console.log('%s, a %d-stringed instrument that goes %s', this.name, this.numberOfStrings, this.sound());
    }

}


//Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum