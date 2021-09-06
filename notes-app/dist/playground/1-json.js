"use strict";
var fs = require('fs');
/* const book = {
    title: 'You Don\'t Know JavaScript',
    author: 'Kyle Simpson'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title); */
var dataBuffer = fs.readFileSync('1-json.json');
var dataJSON = dataBuffer.toString();
var data = JSON.parse(dataJSON);
data.name = 'Chad';
data.age = '34';
dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);
