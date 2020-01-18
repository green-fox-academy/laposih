'use strict';

import { Bird } from "./Bird";

let parrot = new Bird('Parrot')
console.log(`A ${parrot.getName()} is ${parrot.getBlood()} blooded`);
console.log(`The ${parrot.getName()} says ${parrot.fly()}`);