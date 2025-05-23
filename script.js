// Task 1
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log("task1 Conversia din Celsius în Fahrenheit");
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(25)); // Output: 77

// Task 2
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("task2 vxerifică dacă un număr este prim");
console.log(isPrime(7)); //true
console.log(isPrime(10)); //false
console.log(isPrime(2)); //true

// Task 3
function doubleArray(arr) {
    return arr.map(num => num * 2);
}
console.log("task3 Dublarea fiecărui număr dintr-un array");
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

// Task 4
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log("task4 Numără aparițiile unei valori într-un array");
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // Output: 3
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a')); // Output: 2 

// Task 5
function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log("task5 Obține toate cheile unui obiect");
console.log(getObjectKeys({ name: 'Alice', age: 25 })); // Output: ['name', 'age']
console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // Output: ['a', 'b', 'c']


// Task 6
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2 };
}
console.log("task6 Combină două obiecte");
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }

// Task 7
function addListItem() {
    const list = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
}

document.getElementById("addButton").addEventListener("click", addListItem);