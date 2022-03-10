console.log("The script is linked")

//grabbing the three buttons and storing as variables
let crateButton = document.querySelector("#crateRepo")
let smartShopperButton = document.querySelector("#smartShopperRepo")
let weatherButton = document.querySelector("#weatherRepo")

//grabbing the 3 images and storing as variables
let crateImage = document.querySelector("#crateImage")
let smartShopperImage = document.querySelector("#smartShopperImage")
let weatherImage = document.querySelector("#weatherImage")

//adding event listeners and functions to the 3 repo buttons 

crateButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/crate")
})

smartShopperButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/SmartShopper-Application")
})

weatherButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/Realtime-Weather-App")
})

