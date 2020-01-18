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

    constructor(name: string, age: number = 0, sex: Sex = Sex.female, blood: Blood = Blood.warm) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.blood = blood;
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