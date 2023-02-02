const reverseString = function(string) {
    const stringArray = string.split("");
     const revArray = new Array(stringArray.length);
    for (i = 0; i <= stringArray.length -1; i++) {
        revArray[i] = stringArray[stringArray.length - 1 - i ];
    }
    let revString = revArray.join("");
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
