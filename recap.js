function doMath(num1 , num2){
    const sum = num1 + num2 ;
    const diff = num1-num2;
    const multiply = num1 * num2;
    const div =num1/num2;
    const result = multiply/4;
    return result;

}

const finalResult = doMath(10 , 100);
console.log(finalResult);


// Odd even

function isEven(number){
    if( number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(5));

