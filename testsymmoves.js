var context = require('indexer').context;
var cube = require('cube');
var moves = cube.moves.generate();

function main() {
    console.log('creating context');
    var standardContext = context.standardContext();

    console.log('generating every 2 move combination');
}

function generateSequences(length, base) {
    if (length == 0) return [base];
    var results = [];
    for (var i = 0; i < moves.length; i++) {
        var nextS1 = base[0].move();
        var nextS2 = base[1].move();
        results = results.concat(generateSequences(length - 1, ))
    }
}
