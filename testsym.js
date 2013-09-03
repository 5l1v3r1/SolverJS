var cube = require('cube');
var sym = require('symmetry');

var eSlices = cube.edges.echoose.generate();
var allChoices = cube.edges.eo.generate(eSlices);
console.log('there are ' + allChoices.length + ' total positions.');
var symTable = new sym.SymTable(allChoices);
console.log('there are ' + symTable.perfectHashCount() + ' unique positions.');
