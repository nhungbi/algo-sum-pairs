exports.sumPairs = function(integerArrays, desiredSum) {
    let output = []
    for (let i=1; i < integerArrays.length; i++) { 
        for (let int of integerArrays.slice(i)) { //find all possible pairings
            if (integerArrays[i] + int === desiredSum) {
                output.push([integerArrays[i], int])
            }
        }}
    
    if (output.length != 0) {
        return output} 
    
        
    return 'unable to find pair'

};
//console.log(exports.sumPairs([1,2,3,4,5], 9))
//console.log(Array(2))
//console.log(exports.sumPairs([1,1,3], 2)))