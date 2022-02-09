console.log("The script is linked")

//grabbing the three buttons and storing as variables
let smartShopperButton = document.querySelector("#smartShopperRepo")
let weatherButton = document.querySelector("#weatherRepo")
let calendarButton = document.querySelector("#calendarRepo")

//grabbing the 3 images and storing as variables
let smartShopperImage = document.querySelector("#smartShopperImage")
let weatherImage = document.querySelector("#weatherImage")
let calendarImage = document.querySelector("#calendarImage")

//adding event listeners and functions to the 3 repo buttons 

smartShopperButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/SmartShopper-Application")
})

weatherButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/Realtime-Weather-App")
})

calendarButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/Work-Day-Scheduler")
})

//Adding event listeners to the images to act on the buttons
smartShopperImage.addEventListener("mouseenter", function(){
    smartShopperButton.style.marginRight = "0px";
})

weatherImage.addEventListener("mouseenter", function(){
    weatherButton.style.marginRight = "0px";
})

calendarImage.addEventListener("mouseenter", function() {
    calendarButton.style.marginRight = "0px";
})

//Adding Event Listeners to restore the button location on mouseexit

smartShopperImage.addEventListener("mouseleave", function(){
    smartShopperButton.style.marginRight = "85px";
})

weatherImage.addEventListener("mouseleave", function(){
    weatherButton.style.marginRight = "85px";
})

calendarImage.addEventListener("mouseleave", function() {
    calendarButton.style.marginRight = "85px";
})