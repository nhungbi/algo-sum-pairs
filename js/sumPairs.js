exports.sumPairs = function(integerArrays, desiredSum) {
    let output = []
    for (let i=0; i < integerArrays.length; i++) {
        for (let int of integerArrays.slice(i)) {
            if (integerArrays[i] + int === desiredSum) {
                output.push([integerArrays[i], int])
            }
        }}
    
    if (output.length != 0) {
        return output
    } 
    return 'unable to find pair'

};
console.log(exports.sumPairs([1,2,3,4,5], 9))
console.log(exports.sumPairs([1,1,1], 6))