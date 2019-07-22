// Template Literals
let word1 = 'Iwona';
let word2 = 'Szerszen';

const fullNameES5 = 'ES5: ' + ' ' + word1 + ' ' + word2;
console.log(fullNameES5);

const fullNameES6 = `ES6: ${word1} ${word2}`;
console.log(fullNameES6);

let exampleES5 = 'Hello \n' + 'World!'; 
console.log(exampleES5);

let exampleES6 = `${word1}
${word2}`;
console.log(exampleES6);