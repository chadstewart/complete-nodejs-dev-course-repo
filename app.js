const getNotes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');
const { command } = require('yargs');

// Customize yargs version

yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!');
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note!');
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all available notes!',
    handler: () => {
        console.log('Listing all notes!');
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note!',
    handler: () => {
        console.log('Reading a note!');
    }
})

console.log(yargs.argv);

//add, remove, read, list