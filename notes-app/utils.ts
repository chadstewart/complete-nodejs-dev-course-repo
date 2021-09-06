console.log('utils.js');

const myName: string = 'Chad';

interface MathFunc {
    (a: number, b:number): number;
}

const add: MathFunc = function(a, b) {
    return a + b;
};

module.exports = add;