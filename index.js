
// function onclick() {
//     let d = new Date();
//     z.value = a.value
//     a.value = b.value;
//     a.value = document.getElementById("button").value;
//     b.value = document.getElementById("mark").value;
// }
//     // new Date = d.toUTCString
//     document.getElementById("button").value = document.getElementById("mark").value;
//     console.log(d.toString());







// document.getElementById("button").addEventListener("click", function() {
//     var selectedDate = document.getElementById("date").value;
//     var messageParagraph = document.getElementById("mark");
    
//     if (selectedDate) {
//         messageParagraph.textContent = "You selected: " + selectedDate;
//     } else {
//         messageParagraph.textContent = "Please select a date.";
//     }
// });




function handleClick(e){
    const dateInput = document.getElementById("dateInput");
    const outputParagraph = document.getElementById("outputParagraph");

    let rawText = dateInput.value;
    let dateObject = new Date(rawText);
    let outputText = dateObject.toString();
    outputParagraph.innerHTML = rawText + "<br><br>" + outputText;
}

function handleLoaded(e){
    const displayButton = document.getElementById("displayButton");
    
    displayButton.addEventListener("click", handleClick);
}
// document.addEventListener("DOMContentLoaded", handleLoaded);