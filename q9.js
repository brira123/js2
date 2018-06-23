let numb1;
let numb2;
let result;

function setValues() {
    numb1 = parseInt(document.querySelector("#numb1").value);
    numb2 = parseInt(document.querySelector("#numb2").value);
    result = document.querySelector("p");
}
function sum() {
    setValues();
    result.innerHTML = numb1 + " + " + numb2 + " = " + (numb1 + numb2);
}
function diff() {
    setValues();
    result.innerHTML = numb1 + " - " + numb2 + " = " + (numb1 - numb2);
}
function multi() {
    setValues();
    result.innerHTML = numb1 + " * " + numb2 + " = " + (numb1 * numb2);
}
function div() {
    setValues();
    result.innerHTML = numb1 + " / " + numb2 + " = " + (numb1 / numb2);
}
function rem() {
    setValues();
    result.innerHTML = numb1 + " % " + numb2 + " = " + (numb1 % numb2);
}
