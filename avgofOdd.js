// function takes an array as parameter , give me the avg of odd numbers in array

function oddAverage(number){
    const odds = [];

    for(const number of numbers){
        if(number % 2 === 1){

            odds.push(number);

        }
    }

    let sum = 0;
    for(const number of odds){

        sum = sum + number;

    }

}

const numbers = [42 , 45 , 47 , 44 , 49 , 51 , 52 , 456 , 29 , 57 , 443 , 12];
const avg = oddAverage(numbers);
console.log('The average of the odd numbers is = ' , avg);