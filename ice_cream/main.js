document.addEventListener("DOMContentLoaded", ()=>{

    function updateDisplay(){
        const cup = cupElement.checked;
        
        if(cup){
            topping.classList.remove("hidden")
        }
        else{
        topping.classList.add("hidden")
        }
        topping.classList.remove("hidden")
        topping.classList.add("hidden")
    }
    coneElement.onclick = updateDisplay;
    cupElement.onclick = updateDisplay;

    submitOrder.addEventListener("click", ()=>{
        const scoops = Number(scoopsElement.value);

        const cone = coneElement.checked;
        const cup = cupElement.checked;

        const sprinkles = SprinklesElement.checked; 
        const cream = creamElement.checked; 
        const fudge = fudgeElement.checked; 
        const cherry = cherryElement.checked; 

        let basedPrice = 0;
        let tax = 0;
        let total = 0;

        basedPrice = 2.25;
        if(scoops > 1){
            basedPrice += 1.25 * (scoops - 1)
        }
        if(cup){
            if (sprinkles){
                basedPrice += 0.50
            }
            if (cream){
                basedPrice += 0.25
            }
            if (fudge){
                basedPrice += 1.25
            }
            if (cherry){
                basedPrice += 0.25
            }
        }
        tax = basedPrice * 0.07
        total = basedPrice + tax

        basedPriceElement.innerText = "$" + basedPrice.toFixed(2);
        taxElement.innerText = "$" + tax.toFixed(2);
        totalElement.innerText = "$" + total.toFixed(2);
    });
});






// let extraPerDay = 0
// let sprinkles = document.getElementById("Sprinkles").checked
// if (sprinkles == true) {
//     extraPerDay += 0.50
// }
// let cream = document.getElementById("cream").checked
// if (cream == true){
//     extraPerDay += 0.25
// }
// let fudge = document.getElementById("fudge").checked
// if (cream == true) [
//     extraPerDay += 1.25
// ]
// let cherry = document.getElementById("cherry").checked
// if (cherry == true){
//     extraPerDay += 0.25
// }

// document.addEventListener("DOMContentLoaded", ()=>{

//     function updateDisplay(){
//         const cup = cupElement.checked; //EVEN THOUGH ITS A RADIO

//         if(cup){
//             toppings.classList.remove("hidden")
//         }else{
//             toppings.classList.add("hidden")
//         }
//     }
//     coneElement.onclick = updateDisplay;
//     cupElement.onclick = updateDisplay;

//     submitOrder.addEventListener("click", ()=>{
        
//         //GET AND CONVERT ELEMENT VALUES TO LOCAL JS VARIABLES

//         // LOCAL JAVASCRIPT INPUT VARIABLES
//         const scoops = Number(scoopsElement.value);

//         const cone = coneElement.checked; //NOTE CHECKED NOT VALUE
//         const cup = cupElement.checked; //EVEN THOUGH ITS A RADIO

//         const sprinkles = sprinklesElement.checked;
//         const whipped = whippedElement.checked;
//         const fudge = fudgeElement.checked;
//         const cherry = cherryElement.checked;

//         // LOCAL JAVASCRIPT OUTPUT VARIABLES
//         let basePrice = 0;
//         let tax = 0;
//         let total = 0;

//         //START LOGIC
//         basePrice = 2.25;
//         if(scoops > 1){
//             basePrice += 1.25 * (scoops - 1);
//         } 
//         if(cup){
//             if(sprinkles){
//                 basePrice += 0.50
//             }
//             if(whipped){
//                 basePrice += 0.25
//             }
//             if(fudge){
//                 basePrice += 1.25
//             }
//             if(cherry){
//                 basePrice += 0.25
//             }
//         }
//         tax = basePrice * 0.08
//         total = basePrice + tax
//         //UPDATE DISPLAY
//         basePriceElement.innerText = "$" + basePrice.toFixed(2);
//         taxElement.innerText = "$" + tax.toFixed(2);
//         totalElement.innerText = "$" + total.toFixed(2);

//     });// end click

// }); //end content loaded