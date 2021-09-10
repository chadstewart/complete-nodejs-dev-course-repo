/* const chalkChal = require('chalk');

const chalkString: string = 'Success';

console.log(chalkChal.blue.bgGreen(chalkString)); */

let userArguments = process.argv.splice(2);

function checkArgs (userArguments: (string|number)[]) {
    if(userArguments.length === 0) return console.log('No arguments');
    return console.log(userArguments);
}

checkArgs(userArguments);