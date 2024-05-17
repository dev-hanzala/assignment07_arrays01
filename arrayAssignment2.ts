// Question 1
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits); // [ "apple", "banana", "mango", "orange" ]

// Question 2
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers); // [ 10, 20, 30, 40 ]

// Question 3
let thirdFruit = fruits[2];
console.log(thirdFruit); // mango

// Question 4
numbers[1] = 25;
console.log(numbers); // [ 10, 25, 30, 40 ]

// Question 5
fruits.push("grape");
console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange', 'grape' ]

// Question 6
let lastFruit = fruits.pop();
console.log(lastFruit); // grape

// Question 7
let firstFruit = fruits.shift();
console.log(firstFruit); // apple

// Question 8
fruits.unshift("kiwi");
console.log(fruits); // [ 'kiwi', 'banana', 'mango', 'orange' ]

// Question 9
fruits.splice(1, 2);
console.log(fruits); // [ 'kiwi', 'orange' ]

// Question 10
fruits.splice(2, 2, "pinapple", "peer");
console.log(fruits); // [ 'kiwi', 'orange', 'pinapple', 'peer' ]

// Question 11
let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits); // [ 'kiwi', 'orange' ]

// Question 12
let lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // [ 'pinapple', 'peer' ]
