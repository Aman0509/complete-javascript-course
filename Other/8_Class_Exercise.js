"use strict";

let calAverage = (score1, score2, score3) => { return (score1 + score2 + score3) / 3 };
let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins wins with Average score of " + avgDolphins)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas wins with Average score of " + avgKoalas)
    } else {
        console.log("No Result!")
    }
}

let avgDolphins = calAverage(44, 23, 71);
let avgKoalas = calAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);