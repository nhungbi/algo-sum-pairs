var sp = require("./sumPairs");
//var shallowEqualArrays = require('shallow-equal/arrays');
//can use JSON.stringify() to compare instead

// Don't forget to add your tests :)
console.log(sp.sumPairs([1,2,3,4,5],9) == JSON.stringify([[4,5]]));
console.log(sp.sumPairs([1,2,3,4,5],7) == JSON.stringify([[2,5], [3,4]]));
console.log(sp.sumPairs([3,1,5,8,2], 27) === 'unable to find pair');