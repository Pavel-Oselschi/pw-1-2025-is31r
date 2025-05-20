// Task 1
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Task 2
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Task 3
function doubleArray(arr) {
  return arr.map(num => num * 2);
}

// Task 4
function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}

// Task 5
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Task 6
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Task 7
function addListItem() {
  const list = document.getElementById('myList');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  list.appendChild(newItem);
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('addButton').addEventListener('click', addListItem);
});