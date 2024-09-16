// return only even numbers and sum of the even numbers
function evenNumber(numbers){
    const even = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log("This is an Even number!");
            even.push(number);
        }
    }

    return even;

}
const numbers = [12 , 11 , 1 , 23 , 122 , 34 , 343 , 10 ,44 , 34 , 88];
const evens = evenNumber(numbers);
console.log('Even numbers are:' , evens);


function sumEven(numbers){
    let sum = 0;

    for(const number of numbers){
        if(number % 2 === 0){

            sum = sum + number;

        }
    }
    return sum;

}

const sum = sumEven(numbers);
console.log('The sum of even numbers:' , sum);
