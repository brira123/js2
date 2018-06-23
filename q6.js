function check() {
    let mathsMarks = parseInt(document.querySelector("#maths").value);
    let englishMarks = parseInt(document.querySelector("#english").value);
    let computerMarks = parseInt(document.querySelector("#computer").value);
    let result;

    if (mathsMarks > 20 && englishMarks > 10 && computerMarks > 50) {
        result = "PASS";
    } else {
        result = "FAIL";
    }
    alert (result);
}