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

console.log('running search');
for (var i = 0; i < 13; i++) {
    console.log('Exploring depth ' + i + ' with ' + search.nodeCount + ' cosets found...');
    search.nextIteration(i);
}
console.log('found ' + search.nodeCount + ' total nodes');
