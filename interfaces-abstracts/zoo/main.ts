'use strict';

import { Reptile } from "./Reptile";
import { Mammal } from "./Mammal";
import { Bird } from "./Bird";

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

console.log('How do you feed?');
console.log(`A ${reptile.getName()} is feeding by ${reptile.feed()}`);
console.log(`A ${mammal.getName()} is feeding by ${mammal.feed()}`);
console.log(`A ${bird.getName()} is feeding by ${bird.feed()}`);

console.log(`A ${mammal.getName()} is ${mammal.getBlood()} blooded`);