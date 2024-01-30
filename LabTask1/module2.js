import { greetings } from "./module1.js";
import farewellMessage from "./module1.js";

function greet(timeOfDay)
{
    console.log(greetings[timeOfDay]);
}

console.log(farewellMessage);

export function sayGoodbye()
{
    console.log(farewellMessage);
}


