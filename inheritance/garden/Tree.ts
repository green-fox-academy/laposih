'use strict';

import { Plant } from "./Plant";

export class Tree extends Plant {
    color: string;

    constructor(color: string) {
        super(color, 0, 10, 0.4, 'Tree');
    }
}