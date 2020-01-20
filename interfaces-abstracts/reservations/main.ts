'use strict';

import { Reservation } from "./Reservation";

let res = new Reservation();

for (let i: number = 0; i < 10; i++) {
    console.log(`Booking# ${res.getCodeBooking()} for ${res.getDowBooking()}`);
}