var box = require('symmetry').box;
var box1 = (new box.Box()).rotateY(2);
var box2 = (new box.Box()).rotateZ2(true).rotateY(2);
var box3 = box1.apply(box2);
console.log('box: ' + box3.centers);
console.log('thinks its ' + (new box.Box()).flipLR(true).centers);