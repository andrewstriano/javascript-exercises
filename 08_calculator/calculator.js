const add = function(a, b) {
return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
array.forEach(element => {
  sum += element
});
return sum;
};

const multiply = function(arr) {
  const product = arr.reduce((total, n) => total * n);
return product;
}

const power = function(a, b) { 
return a ** b;
};

const factorial = function fac(number) {
  if(number === 0 || number === 1){
    return 1;
  } else {
    return number * fac(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
