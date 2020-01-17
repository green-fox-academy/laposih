'use strict';

import { threadId } from "worker_threads";

enum Gender {
    female,
    male
}

enum Level {
    junior,
    intermediate,
    senior
}

class Person {
    name: string;
    age: number;
    gender: Gender;

    constructor(name?: string, age?: number, gender?: Gender) {
        if (name == undefined && age == undefined && gender == undefined) {
            this.name = 'Jane Doe';
            this.age = 30;
            this.gender = Gender.female;
        } else if (name !== undefined && age !== undefined && gender !== undefined) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        } else {
            throw new TypeError('Not enough arguments provided.');
        }
    }
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
    // constructor(name: string = 'Jane Doe', age: number = 30, gender: Gender = Gender.female) {
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    // }

    introduce() {
        console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + Gender[this.gender] + '.')
    }

    getGoal() {
        console.log('My goal is: Live for the moment!')
    }
}

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;
    constructor(name: string = 'Jane Doe', age: number = 30, gender: Gender = Gender.female, prevOrg: string = 'The School of Life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = prevOrg;
        this.skippedDays = skippedDays;
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.')
    }

    introduce() {
        console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + Gender[this.gender] + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.')
    }

    skipDays(numberOfDays: number) {
        this.skippedDays += numberOfDays;
    }

}

class Mentor extends Person {
    level: Level;
    constructor(name: string = 'Jane Doe', age: number = 30, gender: Gender = Gender.female, level: Level = Level.intermediate) {
        super(name, age, gender);
        this.level = level;
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.')
    }

    introduce() {
        console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + Gender[this.gender] + ' ' + Level[this.level] + ' mentor.')
    }
}

class Sponsor extends Person {
    company: string;
    hiredStudents: number;
    constructor(name: string = 'Jane Doe', age: number = 30, gender: Gender = Gender.female, company: string = 'Google', hiredStudents: number = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduce() {
        console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + Gender[this.gender] + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.')
    }

    hire() {
        this.hiredStudents += 1;
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.')
    }
}

class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];
    constructor(name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(name: Student) {
        this.students.push(name);
    }

    addMentor(name: Mentor) {
        this.mentors.push(name);
    }

    info() {
        console.log('The %s cohort has %d students and %d mentors.', this.name, this.students.length, this.mentors.length)
    }
}



let people = [];

let mark = new Person('Mark', 46, Gender.male);
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, Gender.male, 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, Gender.male, Level.senior);
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, Gender.male, 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();



export { }