function onclick() {
    let d = new Date();
    a.value = b.value
    // new Date = d.toUTCString
    document.getElementById(button).value = document.getElementById(date).value;
    console.log(d.toDateString())
}