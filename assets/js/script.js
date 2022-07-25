"use strict";

document.addEventListener('DOMContentLoaded', init)

function init() {
    let colorpicker = document.querySelector("#colorpicker");
    console.log(colorpicker.value);
    colorpicker.addEventListener("input", changeColor);
}

function changeColor() {
    console.log(colorpicker.value);
}
