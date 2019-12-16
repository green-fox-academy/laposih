// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    static instances: PostIt[] = [];
  
    constructor(bColor: string, text: string, tColor: string) {
      this.backgroundColor = bColor;
      this.text = text;
      this.textColor = tColor;
      PostIt.instances.push(this);
    }
  }

  new PostIt('orange', 'Idea 1', 'blue');
  new PostIt('pink', 'Awsome', 'black');
  new PostIt('yellow', 'Superb!', 'green');

  console.log(PostIt.instances);