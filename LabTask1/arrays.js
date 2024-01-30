//Arrays

let numbers=[1,2,3,4,5];
let fruits=['apple','banana','orange'];
let mixedArray=[1,'two',{name:'Alice'},[7,8,9]];

//Accesing array elements
let firstNumber  = numbers[0];
let secondFruit  = fruits[1];
let thirdElement = mixedArray[2];

numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();

console.log(numbers);
console.log(fruits);

//Array Iteration:

let numberforiteration=[1,2,3,4,5];
numberforiteration.forEach(function(number){
    console.log(number);
});

//Array Iteration Map

let digits=[1,2,3,4,5];
let doubledigit= digits.map(function(digit){
    return digit*2;
});

console.log(doubledigit);
