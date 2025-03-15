const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };


const firstTwo = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(firstTwo); // Output: ['Antonia', 'Nuru']

const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2);

}
const lastTwo = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(lastTwo); // Output: ['Amari', 'Mo']


//selectingDrivers
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

// createFareMultiplier
function createFareMultiplier(multiplier){
    return (fare)=>{
        return fare*multiplier
    }

}

// fareDoubler
const fareDoubler=createFareMultiplier(2)
console.log(fareDoubler(100))

// fareTripler
const fareTripler=createFareMultiplier(3)
console.log(fareTripler(100))


// selectDifferentDrivers

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Use returnFirstTwoDrivers to select the first two drivers
const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers); // Output: ['Antonia', 'Nuru']

// Use returnLastTwoDrivers to select the last two drivers
const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers); // Output: ['Amari', 'Mo']

