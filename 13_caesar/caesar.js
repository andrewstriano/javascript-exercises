const caesar = function(string, shift) {
let result = "";
let charCode = 0;
for (let index = 0; index < string.length; index++) {
    charCode = string[index].charCodeAt()
    if (
        (charCode < 65 || charCode > 122) ||
        (charCode > 90 && charCode < 97)
    ) {
        result += string[index];
    }else{
    let newCharCode =  charCode + Math.ceil(shift % 26);
    if(charCode >= 97 && newCharCode > 122){
        newCharCode = newCharCode -122 + 96;
    }
    if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
    }

    if (charCode >= 97 && newCharCode < 97) {
        newCharCode = newCharCode - 96 + 122;
    }
    if (charCode <= 90 && newCharCode < 65) {
        newCharCode = newCharCode - 64 + 90;
    }

    result += String.fromCharCode(newCharCode);
    }
}
return result;
};

// Do not edit below this line
module.exports = caesar;
