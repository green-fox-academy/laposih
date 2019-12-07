const MY_TYPE_ERROR_MESSAGE = 'this is my type error';

try {
  console.log('szia');
 // throw EvalError();
  throw Error('this is my error');
  throw TypeError(MY_TYPE_ERROR_MESSAGE);

  // console.log('viszlat');
} catch (err) {
  if (err.message === MY_TYPE_ERROR_MESSAGE) {
    console.log('ez egy type error volt');
  } else if (err instanceof EvalError) {
    console.log('ez egy eval error volt');
  } else {
    console.log(err.message);
    console.log('volt valami hiba');
  }
} finally {
  console.log('barmi');
}

function myFunc() {
  try {
    return 1;
  } catch (err) {
    return 2;
  } finally {
    return 3;
  }
}

console.log(myFunc());


  
const fs = require('fs');

try {
  const content = fs.readFileSync('./err.log', 'utf8');
  console.log(content === 'hello world\nbye world');
  console.log(typeof content);
  const lines = content.split('\n');
  console.log(lines);
  const modifiedLines = lines.map(function (line: string, index: number) {
    return (index + 1) + '. ' + line;
  });
  console.log(modifiedLines);
  fs.writeFileSync('./err.log', modifiedLines.join('\n'));
} catch (err) {
  console.log(err.message);
}