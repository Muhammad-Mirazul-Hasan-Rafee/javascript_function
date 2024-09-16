// write a function to give me the sum of all numbers in an array
function sumOfNumbers(numbers){

    let sum =0;

    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;

}
const numbs = [12 ,13, 15, 16, 18 ,22 , 25 ,27 , 28 ,30 , 34 , 37 ,39 , 40];
const sum = sumOfNumbers(numbs);
console.log("Sum of numbers is=",sum);