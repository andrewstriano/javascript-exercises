const convertToCelsius = function(t) {
  let tempInC = (t - 32) * (5 / 9);
  if (tempInC === 0.0) {
    return 0;
  }else {
    return Math.round(tempInC*10)/10;
  }
};

const convertToFahrenheit = function(t) {
  let tempInF = (t * (9/5)) + 32 ;
  if (tempInF === 32.0) {
    return 32;
  } else {
  return Math.round(tempInF*10)/10;
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
