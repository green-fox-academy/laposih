'use strict';

export class Plant {
    color: string;
    waterLevel: number;
    waterThreshold: number;
    waterAbsorption: number;
    type: string

    constructor(color: string, waterLevel: number, waterThreshold: number, waterAbsorption: number, type: string) {
        this.color = color;
        this.waterLevel = waterLevel;
        this.waterThreshold = waterThreshold;
        this.waterAbsorption = waterAbsorption;
        this.type = type;
    }

    needsWatering(): boolean {
        return this.waterLevel < this.waterThreshold;
    }

    watering(water: number) {
        this.waterLevel += water * this.waterAbsorption; 
    }
}