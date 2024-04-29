let a = "92"
let b = "212"
let c = "90"
let d = "72"
let e = "32"
let z = "0"
let g = "-40"

let currentTemp = (g);

// let celsiustemp = convertFtoC(currentTemp)
let convertFtoC = (((currentTemp -32) * 5) / 9);

console.log(convertFtoC);

// let h ="100"
// let i ="45"
// let j ="19"
// let k ="0"
// let l  ="-7"
// let m ="-40"

// let currentTempC = (l);

// let convertCtoF =(((currentTempC * 9) / 5) +32);

// console.log(convertCtoF);


function convertCtoF (c) {
    let f = ((c / (5/9)) + 32)
    return f
}

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));