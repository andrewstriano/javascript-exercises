const repeatString = function(string, num) {
    let i = 0;
    let rString = "";

    if (num >= 0) {
        while (i < num){
            rString += `${string}`;
            i++;
        };
    } else {
        rString = "ERROR";
    };
    return rString;
}
// Do not edit below this line
module.exports = repeatString;
