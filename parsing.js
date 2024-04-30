let name = "Brenda Kaye";

function parseAndDisplayName(name){
    // console.log(`Name: ${name}`)
    let spacePostition = name.indexOf(" ")
    let first = name.slice(0, spacePostition)
    let last = name.slice(spacePostition+1, name.length)

    console.log(`name ${name}`);
    console.log(`first name: ${first}`);
    console.log(`last name: ${last}`);
}
parseAndDisplayName("Brenda Kay")
parseAndDisplayName("Ian Auston")
parseAndDisplayName("Siddalee Grace")


let inputs = "San Francisco,Dallas,Atlanta,Hartford";
let array = inputs.split(",");

for (let i = 0; i < 4; i++){
    console.log(array[i]);
}

let text = "Please visit Microsoft!"
let newText = text.replace("Microsoft", "W3Schools")
console.log(newText)

let newInputs = inputs.replace("Dallas","Austin")
let arrays = newInputs.split(",");

for (let i = 0; i < 4; i+=2){
    console.log(arrays[i]);
}

// console.log(newInputs)
let d = new Date ();
console.log(d);
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());

let date1 = new Date(1934, 7, 12);
let date2 = new Date(1926, 6, 28, 10, 2, 0);
console.log(date1)
console.log(date2)