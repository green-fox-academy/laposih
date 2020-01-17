// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (integer number)
// gender: the gender of the person (male / female)

//And the following methods:

//introduce(): prints out 'Hi, I'm name, a age year old gender.'
//getGoal(): prints out 'My goal is: Live for the moment!'
//And the following constructors:

//Person(name, age, gender)
//Person(): sets name to Jane Doe, age to 30, gender to female
'use strict';

class Person {
    name: string;
    age: number;
    gender: string;
      
    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    introduce() {
        console.log('Hi, I\'m ' + this.name +', a ' + this.age + ' year old ' + this.gender + '.')
    }

    getGoal(goal: string) {
        console.log('My goal is: ' + goal)
    }
  }

const jani = new Person('Jani', 28, 'male');
const jane = new Person();

jani.introduce();
jani.getGoal('Live for the moment!')
jane.introduce();
jane.getGoal('To exist')

export {}