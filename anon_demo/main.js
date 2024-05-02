function a(){
    console.log("a")
}
a();

const alpha = a;

alpha();
a();

const ccc = ()=>console.log("CCC")
ccc();

tax = amount => amount * 0.08
console.log(tax(1000));
//or 
function tax2(amount){
    return amount *0.08;
}
console.log(tax2(1000));


(()=>{
    var x = 123;
    console.log(x);

})();