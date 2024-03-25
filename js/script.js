const display = document.getElementById("display")
function calc() {
    display.value = eval(display.value)
}

function press(x) {
    display.value += x
}

function clean() {
    display.value = ""
}