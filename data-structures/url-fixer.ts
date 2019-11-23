'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let searchTerm: string = 'bots';
let newTerm: string = 'odds';

let array: string [] = url.split('');
array.splice(url.indexOf(searchTerm), searchTerm.length, newTerm);
array.splice(url.indexOf('/'), 0, ':');
url = array.join('');

console.log(url);