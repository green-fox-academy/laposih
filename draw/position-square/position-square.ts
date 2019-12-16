'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquares(startingPointX: number, startingPointY: number){
    ctx.fillRect(startingPointX, startingPointY, 50, 50);
}

function drawSquares(quant: number){
    for (let i: number = 0; i < quant; i++){
        drawSquares();
    }
}

drawRectangle(10, 20);