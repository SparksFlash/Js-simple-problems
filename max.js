const business = 1650;
const minister = 850;
const army = 900;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('minister er pola is bigger');
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(154, 241);
console.log('Largest is', largest)

// compare 3
/* if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
} */

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

function findLargestThree(first, second ,third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

console.log('Largest in three = '+findLargestThree(20,90,45));

var max = Math.max(business, minister, army);
// console.log('largest is', max);

// Task 2: Write a function to find the smallest of three numbers.

function findSmallestThree(first, second ,third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

console.log('Smallest in three = '+findSmallestThree(10,90,45));
var min = Math.min(business, minister, army);
console.log('Smallest is', min);