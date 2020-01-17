'use strict';

import { Flower } from "./Flower";
import { Plant } from "./Plant";
import { Tree } from "./Tree";

export class Garden {
    plants: Plant[];

    constructor() {
        this.plants = [new Flower('yellow'), new Flower('blue'), new Tree('purple'), new Tree('orange')]
    }

    status() {
        this.plants.forEach(element => {
            if (element.needsWatering()) {
                console.log('The %s %s needs water.', element.color, element instanceof Flower ? 'Flower' : 'Tree')
            } else {
                console.log('The %s %s doesn\'t need water.', element.color, element instanceof Flower ? 'Flower' : 'Tree')
            }
        })
    }
    
    watering(amount: number) {
        let thirstyPlants = this.plants.filter(x => x.needsWatering());
        let amountPerPlant = amount / thirstyPlants.length;
        this.plants.forEach(element => {
            if (element.needsWatering()) {
                element.watering(amountPerPlant);
            }
        })
        console.log('Watering with ' + amount);
        this.status();
    }
}

let garden = new Garden;
garden.status();
garden.watering(40);
garden.watering(70);