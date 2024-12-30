const leapYears = function(number) {
    if(number%4 ==0 && number%400 != 0){
        return true;
    }
    else {
        return false;
    }
};

//console.log(leapYears(2000));
// Do not edit below this line
module.exports = leapYears;
