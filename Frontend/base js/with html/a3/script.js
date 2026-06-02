let display = document.getElementById("display");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("num")) {
        display.value += event.target.innerText;
    } else if (event.target.classList.contains("operator")) {
        display.value += " " + event.target.innerText + " ";
    } else if (event.target.id === "btnEqual") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
});