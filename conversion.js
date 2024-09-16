//  Inch to feet

function inchToFeet(inch){

    const feet = inch / 12;
    return feet;

}

function inchToFeet2(inch){
    const feetFraction  =  inch / 12; 
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + " inch ";
    return result;


}

const height = inchToFeet(88);
// console.log(height);
const height2 = inchToFeet2(88);
// console.log(height2);


function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloMeterToMiles(kiloMeter){
    const mile = kiloMeter * 0.6;
    return mile;
}