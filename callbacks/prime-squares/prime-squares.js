'use strict';

document.body.onload = () => {
    for (let i = 2; i < 101; i++) {
        addElement(i);
    }
    addClass();
};

function addElement(number) { 
  let newDiv = document.createElement("div"); 
  let newContent = document.createTextNode(number); 
  newDiv.appendChild(newContent);  

  let section = document.getElementsByTagName('section')[0]; 
  section.appendChild(newDiv);
}

function addClass() {
    let divs = document.getElementsByTagName('div');
    let delay = 100;
    for (let div of divs) {
        setTimeout(() => {
            if (isPrime(parseInt(div.innerHTML))) {
            div.setAttribute('class', 'prime');
            } else {
            div.setAttribute('class', 'not-prime');
            }}, delay); 
        delay += 100;
    }
}


function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i == 0) {
            return false;
        }
    }
    return value > 1;
}