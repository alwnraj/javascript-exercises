const sumAll = function(start, end) {

    let newsum = 0;
    for (let i=start; i<end+1; i++){
        newsum += i;
    }

    return newsum;

};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
