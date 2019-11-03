'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingHours = 6;
let weeksOfSemester = 17;
let averageWorkHours = 52;

console.log('An attendee codes ' + codingHours * weeksOfSemester * 5 + ' hours in a semester.');

console.log('Percentage of the coding hours are ' + Math.round((codingHours * weeksOfSemester * 5) / (weeksOfSemester * averageWorkHours) * 100) + '.');
