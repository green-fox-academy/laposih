enum Gender {
    female,
    male
}

class Person {
    name: string;
    age: number;
    gender: Gender;

    // constructor(name?: string, age?: number, gender?: Gender) {
    //     if (name == undefined && age == undefined && gender == undefined) {
    //         this.name = 'Jane Doe';
    //         this.age = 30;
    //         this.gender = Gender.female;
    //     } else if (name !== undefined && age !== undefined && gender !== undefined) {
    //         this.name = name;
    //         this.age = age;
    //         this.gender = gender;
    //     } else {
    //         throw new TypeError('Not enough arguments provided.');
    //     }
    // }
    // constructor(name?: string, age?: number, gender?: Gender) {
    //     if (name == undefined || age == undefined || gender == undefined) {
    //         this.name = 'Jane Doe';
    //         this.age = 30;
    //         this.gender = Gender.female;
    //     } else {
    //         this.name = name;
    //         this.age = age;
    //         this.gender = gender;
    //     }
    // }
    constructor(name: string = 'Jane Doe', age: number = 30, gender: Gender = Gender.female) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let x = new Person("jani");
console.log(x);