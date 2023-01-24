//Medium:Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8 slice pizza x being a decimal in case there is no way to split the pizza evenly.

function sharePizza(x,y){
    result = x/y ;
    return (`Each person gets ${result.toFixed(2)} slices of pizza; from our ${(x)} slice pizza.`);
    //The toFixed() method rounds the string to a specified number of decimals.
}
console.log(sharePizza(8,2)); //output: Each person gets 4.00 slices of pizza; from our 8 slice pizza