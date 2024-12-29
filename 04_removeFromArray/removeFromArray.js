const removeFromArray = function(a,b) {

    let newarr = [];
    
    for(let i=0 ; i < a.length; i++){
        if(a[i] !== b){
            newarr.push(a[i]);
        }
    }
    return newarr;
};

//console.log(removeFromArray([1, 2, 3, 4],2));
// Do not edit below this line
module.exports = removeFromArray;
