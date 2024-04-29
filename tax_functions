function getSocSecTax(grossPay) {
    const ratePercent = 6.2
    const fractionRate = ratePercent / 100
    let tax = fractionRate * grossPay;
    return tax;
    //vs simplified
    //return 0.062 * grossPay;
}
console.log(getSocSecTax(2000));

function getMedicareTax(grossPay) {
    return grossPay * 0.145;
}
console.log(getMedicareTax(2000));

function getFederalTax(grossPay, withholdingCode) {
    if (withholdingCode == 0) {
        return grossPay * 0.23;
    } else if (withholdingCode == 1) {
        return grossPay * 0.21;
    } else if (withholdingCode == 2) {
        return grossPay * 0.195;
    } else if (withholdingCode == 3) {
        return grossPay * 0.185;
    } else if (withholdingCode >= 4) {
        const overFourAmount = withholdingCode - 4
        const baseRate = 0.18;
        const adjustment = overFourAmount * .005
        const finalRate = baseRate - adjustment; //less means minus
        return grossPay * finalRate;
    }
}
console.log(getFederalTax(750, 0));
console.log(getFederalTax(1550, 2));
console.log(getFederalTax(1100, 6));