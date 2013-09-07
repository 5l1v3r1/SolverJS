var Search = require('indexer').search.Search;
var context = require('indexer').context;
var cube = require('cube');

console.log('creating context');
var standardContext = context.standardContext();

console.log('creating search');
var eSlice = new cube.edges.echoose.EChoose();
var eo = new cube.edges.eo.EdgeOrientations(null, eSlice);
var co = new cube.corners.comap.CoMap();
var search = new Search(standardContext, eo, co);

var idaDepth = 7;
console.log('running forward IDA* to a depth of ' + idaDepth + '...');
var lastCount = 0;
for (var i = 0; i <= idaDepth; i++) {
    search.nextIteration(i);
    console.log('IDA* depth ' + i + ' done with ' + search.nodeCount + ' nodes');
}

console.log('performing backwards IDA* search...');
search.initiateBacksearch();
for (var i = idaDepth + 1; i <= 12; i++) {
    search.iterateBacksearch(i, function (percentage) {
        process.stdout.write('\rcompleted ' + Math.round(percentage) + '% with ' + search.nodeCount + ' nodes');
    });
    console.log('\nIDA* backsearch ' + i + ' done with ' + search.nodeCount + ' nodes');
}

console.log('saving to UDcosets.idx...');
search.table.save('UDcosets.idx');
