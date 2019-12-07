'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRectangles(volume: number){
    ctx.fillStyle = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    ctx.fillRect(Math.floor(Math.random() * volume), Math.floor(Math.random() * volume), Math.floor(Math.random() * volume), Math.floor(Math.random() * volume));
}


function drawRandom(quant: number){
    for (let i: number = 0; i < quant; i++){
        drawRectangles(100);

    }
}

drawRandom(4);
