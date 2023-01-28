const picker = document.getElementById("seedColor")  //color
const modePicker = document.getElementById("color-scheme") //mood selection
const btnGet = document.getElementById("colorBtn") //button

btnGet.addEventListener("click", getScheme)


function getScheme(){
    let hex = picker.value.slice(1)
    let mode = modePicker.value
    let hexArray =[]
    
 fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
 .then(res => res.json())
 .then(data => {
     let colorArr = data.colors
     colorArr.forEach((color) => {
         hexArray.push(color.hex.value)
     })
     let colorDivs = document.querySelectorAll(".color-div")
     let hexDivs = document.querySelectorAll(".hex-div")
     let i = 0
     hexDivs.forEach((div) => {
         div.textContent = hexArray[0]
         colorDivs[i].style.backgroundColor = hexArray[0]
         i++
         hexArray.shift()
     })
 })}