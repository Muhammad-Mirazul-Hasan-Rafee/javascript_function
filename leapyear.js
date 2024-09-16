function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}





function isLeapYear2(year){
    if(year % 100 !== 0 && year%4 === 0 )
    {
        return true;
    }

    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2024);
const leapYear2 = isLeapYear2(2025);
const leapYear3 = isLeapYear2(2026);
const leapYear4 = isLeapYear2(2027);
const leapYear5 = isLeapYear2(2028);

console.log(leapYear , leapYear2 , leapYear3 , leapYear4 , leapYear5);