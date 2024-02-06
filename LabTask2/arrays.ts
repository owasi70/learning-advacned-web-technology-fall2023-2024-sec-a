let numbers: number [] = [1,2,3,4,5];

let firstElement : number = numbers[0];

console.log (firstElement);

let arrayLength : number = numbers.length;
numbers.push(6);

for (let num of numbers)
{
    console.log (num);
}


let doubledNumbers : number [] = numbers.map((num: number) => num * 2 );
let evenNumbers: number[] = numbers.filter((num:number)=>num % 2 == 0);
let sum : number = numbers.reduce((prev:number, next : number)=> prev + next);