let c1 = 0, c2 = 0;
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

for (let i = 0; i < dolphins.length; i++) {
    c1 += dolphins[i];
    c2 += koalas[i];
}

c1 = c1 / dolphins.length;
c2 = c2 / koalas.length;


if (c1 > c2) {
    console.log("Dolphins Wins!!")
} else if (c2 > c1) {
    console.log("Koalas Wins!!")
} else {
    console.log("Match Drawn!!")
}
