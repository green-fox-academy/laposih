'use strict';

export enum Sex {
    female,
    male
}

export enum Blood {
    cold,
    warm
}

export abstract class Animal {
    name: string;
    age: number;
    sex: Sex;
    blood: Blood;

    constructor(name: string, age: number, sex: Sex, blood: Blood) {
        this.name = name;
        this.age = 0;
        this.sex = Sex.female;
        this.blood = Blood.warm;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getBlood(): string {
        return Blood[this.blood];
    }

    abstract breed(): string;

    abstract feed(): string;
}