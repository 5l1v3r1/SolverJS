var cube = require('cube');
var sym = require('symmetry');

var state = new cube.edges.echoose.EChoose([1,1,0,0,0,1,1,0,0,0,0,0]);
var symmetry = new sym.udsym.UDSym(false, 0, true);
var leastSymmetry = new sym.udsym.UDSym(false, 3, true);
var aState = state.symmetrize(symmetry);
var applied = symmetry.inverse().apply(leastSymmetry);

var printState = aState.symmetrize(symmetry.inverse()).rotateY(3).flipLR(true);
var state2 = aState.symmetrize(applied);
console.log('aState ' + JSON.stringify(printState));
console.log('state ' + JSON.stringify(state2));
