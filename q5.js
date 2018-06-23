function calculatePercentage() {
    let marks = document.querySelector("input").value;
    let totalMarks = 1050;
    let percentage = (marks/totalMarks) * 100;
    percentage = Math.round(percentage * 100) / 100;
    alert ("Your percentage is " + percentage + "% ");
}