"use strict";
const cubeRoot = (number, initialGuess) => {
    let BetterApproximation, final;
    do {
        BetterApproximation = (initialGuess + ((1 / 3) * ((number / initialGuess ** 2) - initialGuess)));
        final = BetterApproximation - initialGuess;
        initialGuess = final;
    } while ((Math.abs(final)) > 0.000001);
    {
        return (BetterApproximation);
    }
};
let number = cubeRoot(8, 1);
console.log(number);
