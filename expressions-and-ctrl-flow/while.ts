//addig printeljen ki szamokat, amig nem talal egy parosat

function getRandomInt(max) {
    return Math.round(Math.random() * Math.floor(max));
  }

let a: number = getRandomInt(10);
console.log(a);

while (a % 2 !== 0) {
    a = getRandomInt(10);
    console.log(a);
}


/*
while (a < 10) {
    console.log(a); // Prints the numbers from 0 to 9
    a++;
  }

//irj ki egy szoveget a vegtelensegig

while (true) {
    console.log('kutya');
}*/

//

export {}