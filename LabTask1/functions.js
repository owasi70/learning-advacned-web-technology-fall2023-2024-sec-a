function greet(name){
    console.log(`Hello,${name}!`);
}
greet("Allice");

//Function Return

function sum(a,b)
{
    return a+b;
}

let result =sum(1,2);
console.log(result);

//Arrow Function
let greeting = newName =>console.log(`Hello,${newName}!`);
greeting("Bob");

//Annonyms Fundtion

const anothergreeting= function(anothername)
{
    console.log(`Hello,${anothername}!`);
};

greet("Alice");


function operateOnNumbers(a,b,operation)
{
    return operation(a,b);
}

function add(x,y)
{
    return x + y ;
}

function multiply (x,y)
    {
        return x * y;
    }

    let resultaddition = operateOnNumbers(5,3,add);
    let resultMultiplication = operateOnNumbers(5,3,multiply);

    console.log(resultaddition);
    console.log(resultMultiplication);
