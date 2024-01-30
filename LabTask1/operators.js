let age = 20 ;
let status = (age >= 18) ? "Adult" : "Minor" ;

console.log(status);

//copying an array
let arr1 = [1 , 2 , 3];
let arr2 = [...arr1];

//concatenating arrays
let arr3 = [4,5,6];
let combinedArray = [...arr1, ...arr3];

//Adding elements to an array
let newArr = [0, ...arr1, 4];

//Sprading array elements as function arguments
function sum(a , b , c)
{
    return a + b + c ;
}

let numbers = [1, 2 ,3 ];
let result =sum(...numbers);

//copying an object

let obj1 = {name: 'john' , age:25};
let obj2 = {...obj1};

//Merging objects
let obj3 ={city: 'New York', ...obj1};

function sum(...numbers)
{
    let total = 0;
    for (let number of numbers )
    {
        total += number;
    }
    return total;
}

let results = sum(1,2,3,4,5);
console.log(results);

results = sum(10,20);
console.log(results);


