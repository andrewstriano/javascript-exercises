const leapYears = function(year) {
let answer; 
if (year % 4 === 0 && year % 100 !== 0) {
    return true;
} else if (year % 400 === 0) {
    return true;
} else {
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;
