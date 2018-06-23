function speed() {
    let speed = document.querySelector("input").value;
    let maxSpeed = 60;
    let result;

    if (speed > maxSpeed) {
        result = "OVERSPEEDING";
    } else {
        result = "NOT";
    }
    alert (result);
}