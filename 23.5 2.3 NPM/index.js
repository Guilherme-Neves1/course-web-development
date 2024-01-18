// Versão CJS
// var generateName = require('sillyname');
// var sillyName = generateName();

// Versão ESM
// DICA: Usar 'import xxx from "sillyname"'
// Assim após adicionar a biblioteca no from,
// // o nome em import será sugerido.

// import generateName from "sillyname";

// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

import superheroes from "superheroes";

const allNames = superheroes.all;

const name = superheroes.random();

console.log(`I am ${name}!`);
