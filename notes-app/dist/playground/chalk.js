"use strict";
/* const chalkChal = require('chalk');

const chalkString: string = 'Success';

console.log(chalkChal.blue.bgGreen(chalkString)); */
var userArguments = process.argv.splice(2);
function checkArgs(userArguments) {
    if (userArguments.length === 0)
        return console.log('No arguments');
    return console.log(userArguments);
}
checkArgs(userArguments);
