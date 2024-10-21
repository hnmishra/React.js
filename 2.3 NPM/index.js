//var generateName = require('sillyname');
import generateName from "sillyname"; 
import superheroes from "superheroes";

var sillyName = generateName();
console.log('my name is ' + sillyName);
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

const name= superheroes.random();
console.log('I am supr hero: ' + name);