var context = require('indexer').context.standardContext();
console.log('perfect hash count: ' + context.symtable.perfectHashCount());
console.log('total hash count: ' + context.hashCount());