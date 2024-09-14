// for a given string tell me it has even number of characters or not

function evenSizedString(str){

    const size = str.length;
    if(size % 2 === 0){
        console.log('Even size');
        return true;
    }
    else{

        console.log("Very Odd size");
        return false;
    }

    console.log(str , size);

}

// evenSizedString('Rafee');

function doubleOrTripple(number , doDouble){
    if(doDouble === true){
        const result = number*2;
        return result;
    }

    else{
        const result = number*3;
        return result;
    }
}

console.log(doubleOrTripple(5 , true));
console.log(doubleOrTripple(5 , false));
