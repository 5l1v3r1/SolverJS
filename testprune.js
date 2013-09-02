var cube = require('cube');
var prune = require('prune');

var allChoices = cube.edges.echoose.generate();
console.log('made all choices with count of ' + allChoices.length);
var symTable = new prune.SymTable(allChoices);
console.log('made symmetries');
console.log('there are ' + symTable.perfectHashCount() + ' things.');
