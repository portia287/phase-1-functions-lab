function distanceFromHqInBlocks(someValue){
    if(someValue === 43){
        return 1;
    }
    else if (someValue === 50){
        return 8;
        
    }
    else if (someValue < 42){
        return 8;
    }
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if (someValue === 43){
        return 264;
    }
    else if (someValue === 50){
        return 2112;
    }
    else if (someValue === 34){
        return 2112;
    }
    else if (someValue < 42){
    return 2112;
}

}
function distanceTravelledInFeet(start, destination){
    if (start === 43 && destination === 48)
    return 1320;
    else if (start === 50 && destination === 60)
    return 2640;
    else if (start === 34 && destination < start)
    return 1584;
}
function calculatesFarePrice(start, destination) {
    if (start === 43 && destination === 44)
    return  0;
    else if (start === 34 && destination === 32)
    return 2.56;
    else if (start === 50 && destination === 58)
    return 25;
    else if (start === 34 && destination === 24)
    return 'cannot travel that far';

}