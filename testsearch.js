var Search = require('indexer').search.Search;
var context = require('indexer').context;
var cube = require('cube');

console.log('creating context');
var standardContext = context.standardContext();

console.log('creating search')
var eSlice = new cube.edges.echoose.EChoose();
var eo = new cube.edges.eo.EdgeOrientations(null, eSlice);
var co = new cube.corners.comap.CoMap();
var search = new Search(standardContext, eo, co);

console.log('running search');
var lastDepth = 0;
while (search.nextIteration()) {
    if (search.depth != lastDepth) {
        lastDepth = search.depth;
        console.log('Bumped up to depth of ' + lastDepth);
    }
    if (search.nodeCount % 1000 == 0) {
        console.log('Found ' + search.nodeCount + ' cosets ' + search.shiftTime + ', ' + search.hashTime + ', ' + search.expandTime);
    }
}