const tea_projects_tracker_tool = require('tea-projects-tracker-tool');
const tea_projects_fetcher_tool = require('tea-projects-fetcher-tool');
const enzyme = require('enzyme');
const validator = require('validator');
const axios = require('axios');
const mocha = require('mocha');
const mongoose = require('mongoose');
const sequelize = require('sequelize');
const nodemon = require('nodemon');
const socket.io = require('socket.io');
const supertest = require('supertest');
const debug = require('debug');
const dotenv = require('dotenv');
const eslint = require('eslint');

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log([1, 2, 3, 4].reduce(reducer));

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);