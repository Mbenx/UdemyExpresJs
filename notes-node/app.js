console.log('Starting app....');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('Result:', notes.add(9,-2));

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('cek.txt',`Hello World ${user.username}!, you are ${notes.age}`);
