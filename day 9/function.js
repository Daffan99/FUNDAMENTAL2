const { log } = require("console");

let f1  = () => {
    //expresion
};

function f2(){

}
console.log(typeof f2());


function recursive(param){
    console.log(param);
    return recursive(param)
}
// recursive('ayam')


function factorial(n){
    if(n === 0){
        return 0;
    } else {
        return n + factorial (n - 1);
    }
    
}
console.log(factorial(5));
console.log(factorial(15));
console.log(factorial(10));




