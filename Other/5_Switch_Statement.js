const day = 3;

switch (day) {
    case 1:
        console.log("Today is Sun");
        break;

    case 2:
        console.log("Today is Mon");
        break;

    case 3:
        console.log("Today is Tues");

    case 4:
        console.log("Today is Wed");
        break;

    case 5:
        console.log("Today is Thurs");
        break;

    case 6:
        console.log("Today is Fri");
        break;

    case 7:
        console.log("Today is Sat");
        break;

    default:
        console.log("Invalid Choice");
}

// Implementation of Above Switch Case with if else 


if (day === 1) {
    console.log("Today is Sun");

} else if (day === 2) {
    console.log("Today is Mon");

} else if (day === 3 || day === 4) {
    console.log("Today is Tues");
    console.log("Today is Wed");
}
else if (day === 5) {
    console.log("Today is Thurs");
}
else if (day === 6) {
    console.log("Today is Fri");
}
else if (day === 7) {
    console.log("Today is Sat");
} else {
    console.log("Invalid Choice");

}