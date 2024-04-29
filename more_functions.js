let name1 = "Ricky Spanish "
let address = "416 Cherry Street "
let city = "Lanfley Falls "
let state = "VA "
let zip = "23665"
displayMailingLabel = (name1 + address +  city + state + zip)


console.log(displayMailingLabel)

addNumbers(169,192)

function addNumbers(someNumber,someNumber2){

console.log(someNumber + " + ", + someNumber2 + " = " + (someNumber+someNumber2))
}

totalDue = "169"
amountPaid = "192"
changeDue = (totalDue - amountPaid)

console.log(changeDue)


function getNumGrandKids(num) {
    return 6;
}
 let num = getNumGrandKids();
 console.log(num);

function getNumGrandkids(name) {
    let num3 = 0;

    if(name == "Dana") {
        num3 = 6; 
    }else if (name == "Karla") {
        num3 = 3;
    }else if (name == "Leslye") [
        num3 = 2,
    ]
    return num3;
}

num3 = getNumGrandkids( "Dana");
console.log(num3);
num3 = getNumGrandkids("Karla");
console.log(num3);