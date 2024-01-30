import { greetings } from "./module1.mjs";
import farewellMessage from "./module1.mjs";

function greet(timeOfDay)
{
    console.log(greetings[timeOfDay]);
}

console.log(farewellMessage);

export function sayGoodbye()
{
    console.log(farewellMessage);
}


