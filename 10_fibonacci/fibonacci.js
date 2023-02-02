const fibonacci = function(number) {
    if(number < 0){
        return "OOPS"
    }
    let num = parseInt(number);
    const fib = [0,1];
    for (i=2;i<=num;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
}
 

// Do not edit below this line
module.exports = fibonacci;
