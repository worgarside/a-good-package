const opn = require('opn');

module.exports.pandorasBox = (maxLength) => {

    console.log(`
  ____  
 /    \\ 
|   |  \\
|___|  /
     \\/ 
`);

    setTimeout(() => {
        console.log(`
  ____  
_/ __ \\ 
\\  ___/ 
 \\___  >
     \\/ 
    `)
    }, 1000);

    setTimeout(() => {
        console.log(`
___  __
\\  \\/ /
 \\   / 
  \\_/  
    `)
    }, 2000);

    setTimeout(() => {
        console.log(`
  ____  
_/ __ \\ 
\\  ___/ 
 \\___  >
     \\/ 
    `)
    }, 3000);

    setTimeout(() => {
        console.log(`
_______ 
\\_  __ \\
 |  | \\/
 |__|   
    `)
    }, 4000);

    setTimeout(() => {
        console.log('gonna give you up');
    }, 5000);

    setTimeout(() => {
        // for (let i = 0; i <= maxLength; i++) {
            opn('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        // }
    }, 6000);


};