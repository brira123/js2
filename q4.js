let noOfApples;
let noOfBananas;
let noOfMangoes;

let costPerApple = 10;
let costPerBanana = 15;
let costPerMango = 8;

function totalCost() {
    let noOfApples = parseInt(document.querySelector("#numb1").value);
    let noOfBananas = parseInt(document.querySelector("#numb2").value);
    let noOfMangoes = parseInt(document.querySelector("#numb3").value);

    let totalCost = noOfApples*costPerApple + noOfBananas*costPerBanana + noOfMangoes*costPerMango;

    let paragraph = document.querySelector("p");
	paragraph.innerHTML = "Total Cost is " + totalCost;
}

