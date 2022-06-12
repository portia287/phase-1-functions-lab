function distanceFromHqInBlocks(distance){
 let location = 42;
 if(distance >= location){
    return distance - location;
 }
 else{
    return location = distance
 }
}
function distanceFromHqInFeet(distance){
    let headQuaters = distanceFromHqInBlocks(distance);
    return headQuaters * 264;
}
function distanceTravelledInFeet(start, destination){
    //Let feetTravelled = destination - start;
    if (start > destination){
        return (start - destination)* 264;
    }
    else{
        return (destination - start)* 264;
        //'cannot travel that far'
    }
}
function calculateFarePrice(start, destination){
    let feetTravelled;
    let price;
    if(destination > start){
     feetTravelled = (destination- start)* 264;

    }
    else{
        feetTravelled = (start - destination)* 264; 
    }
    if (feetTravelled <= 400){
        price =0;
    }
    else if (feetTravelled > 400 && feetTravelled <= 2000){
        price = (feetTravelled - 400)* 0.02
    }
    else if (feetTravelled > 2000 && feetTravelled <= 2500){
        price = 25
    }
    else{
        price = 'cannot travel that far'
    }
    return price
}