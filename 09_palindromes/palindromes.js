const palindromes = function (str) {
let re = /[\W_]/g; 
let lowRegStr = str.toLowerCase().replace(re, "");
let revRegStr = lowRegStr.split("").reverse().join("");
return revRegStr === lowRegStr; 
};

// Do not edit below this line
module.exports = palindromes;
