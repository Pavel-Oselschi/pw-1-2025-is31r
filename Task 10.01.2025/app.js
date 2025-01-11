// Task 1
const matrix = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];


console.log("Initial matrix:", matrix);


function lessThanFive(arr) {
    return arr.filter(num => num < 5);
}


function maxMinPositions(arr) {
    const maxPos = arr.indexOf(Math.max(...arr));
    const minPos = arr.indexOf(Math.min(...arr));
    return { maxPos, minPos };
}


function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

function greaterThanMean(arr) {
    const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return arr.filter(num => num > mean);
}

console.log("Numbers less than 5:", lessThanFive(matrix));
const { maxPos, minPos } = maxMinPositions(matrix);
console.log("Position of max value:", maxPos);
console.log("Position of min value:", minPos);
console.log("Array sorted in descending order:", sortDescending(matrix));
console.log("Numbers greater than the arithmetic mean:", greaterThanMean(matrix));

// Task 2
const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
console.log("initial matrix:", array)

function uniqueSorted(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

const uniqueArray = uniqueSorted(array);
console.log("Unique sorted array:", uniqueArray);

const user = {}; // Create an empty user object
user.name = "John"; // Add a name property with the value John
user.surname = "Smith"; // Add a surname property with the value Smith
user.name = "Pete"; // Change the value of the name property to Pete
delete user.name; // Delete the name property from the object

console.log("Final user object:", user);