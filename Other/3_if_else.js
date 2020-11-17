const citizenAge = 16

if (citizenAge < 18) {
    console.log(`You are not eligible for Driver's License. Wait for ${18 - citizenAge} more years`)
} else {
    console.log("You are eligible for Driver's License")
}

// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// Note - I have commented out above variables because in my HTML file, I am calling all scripts togeter
// hence, it seems I can use these variables which are actually defined in other file in this file.


if (markBMI > johnBMI) {
    console.log(`Mark BMI is ${markBMI} and it is higher than John's`)

} else {
    console.log(`John's BMI is ${johnBMI} and it is higher than Mark;s`)
}

// Ternary Operator
// condition ? expression 1 : expression 2

5 > 9 ? console.log("LOL") : console.log("5 can never be greater than 9");

/* Using Prompt and if else if

let temp = Number(prompt("Enter Number - "))

if (temp > 20 && temp < 100) {
    console.log("Number is greater than 20 and less than 100")
}
else if (temp === 12) {
    console.log("Number is equal to 12")
}
else {
    console.log("I cannot guess the number")
}

*/
