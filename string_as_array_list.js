const people = ["dandy", "bianca", "finnley", "kevin", "Nina"]

console.log(people[1])
console.log(people[people.length -1])

for (i=0; i<people.length; i++) {
    console.log(people[i])
}
// for (i=0, i>people.length, 1++){
//     console.log(i, people[i])
// }

// let d = new Date() 
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getFullYear())
// console.log(d.getDay())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
let monthName = months[d.getMonth()];
console.log(months)
console.log(months[5])
console.log(months[months.length -4])

for (i=0; i< 12; i++){
    console.log(months[i])
}
