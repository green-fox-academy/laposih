// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

'use strict';

import { Reservationy } from "./Reservationy"

const alphabet: string[] = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");

export class Reservation implements Reservationy {
    DOW: string[];
    character: string[];

    constructor(DOW: string[], character: string[]) {
        this.DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        this.character = alphabet;
    }
    
    getDowBooking(): string {
        
        return
    }

    getCodeBooking(): string {
        return
    }

}