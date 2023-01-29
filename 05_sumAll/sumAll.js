const sumAll = function(start, fin) {
let count = 0;
    if (start > fin) {
        for (i = fin; i <= start; i++) {
            count += i;
        }
    } else if (start < 0 || fin < 0 || typeof(start) !== "number" || typeof(fin) !== "number"){ 
        return "ERROR";

    } else {
        for (i = start; i <= fin; i++) {
            count += i;
        }
    }

return count;
};

// Do not edit below this line
module.exports = sumAll;
