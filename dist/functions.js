"use strict";
function calculateTax1(income, taxYear = 2020) {
    let x;
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function sumNum(input) {
    return input;
}
calculateTax1(10000, 2022);
//# sourceMappingURL=functions.js.map