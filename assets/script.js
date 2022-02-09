console.log("The script is linked")

//grabbing the three buttons as variables
let smartShopperButton = document.querySelector("#smartShopperRepo")
let weatherButton = document.querySelector("#weatherRepo")
let calendarButton = document.querySelector("#calendarRepo")

//adding event listeners and functions

smartShopperButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/SmartShopper-Application")
})

weatherButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/Realtime-Weather-App")
})

calendarButton.addEventListener("click", function(){
    window.open("https://github.com/Will-Neal/Work-Day-Scheduler")
})
