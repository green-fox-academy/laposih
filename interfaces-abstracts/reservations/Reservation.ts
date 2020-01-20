// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

'use strict';

import { Reservationy } from "./Reservationy"

const alphabet: string[] = ("0123456789abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");

export class Reservation implements Reservationy {
    DOW: string[];
    character: string[];
    length: number;

    constructor(length: number) {
        this.length = length;
        this.DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        this.character = alphabet;
    }
    
    getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
      }

    getDowBooking(): string {
        return this.DOW[this.getRandomInt(this.DOW.length)];
    }

    getCodeBooking(): string {
        let code: string = '';
        for (let i: number = 0; i < this.length; i++) {
            code = code + this.character[this.getRandomInt(this.character.length)];
        }
        return code;
    }

}