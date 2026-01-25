/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    let ans = inputEl.value
    lengthEl.innerText = `${ans} meter = ${ans * meterToFeet} feet`
})

convertBtn.addEventListener("click", function(){
    let ans = inputEl.value
    massEl.innerText = `${ans} kilos = ${ans * kiloToPound} pounds`
})


convertBtn.addEventListener("click", function(){
    let ans = inputEl.value
    volumeEl.innerText = `${ans} litres = ${ans * literToGallon} gallons`
})


