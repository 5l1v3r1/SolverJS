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

console.log('running forward BFS to a depth of 7...');
var lastCount = 0;
for (var i = 0; i <= 7; i++) {
    search.nextIteration(i);
    console.log('completed depth ' + i + ' with ' + search.nodeCount + ' nodes');
}
console.log('initiating backsearch with ' + search.nodeCount + ' found nodes...');
search.initiateBacksearch();
console.log('performing backwards search for ' + search.backsearch.length + ' nodes');
while (search.nextBacksearch(5, 7)) {
    if (search.nodeCount != lastCount) {
        console.log('Found ' + search.nodeCount + ' nodes');
        lastCount = search.nodeCount;
    }
}
/*console.log('saving to UDcosets.idx...');
search.table.save('UDcosets.idx', function(err) {
    if (err) console.log(err.toString());
    process.exit();
});
*/