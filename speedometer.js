const speedElement = document.querySelector("speed")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let watchID = null
startBtn.addEventListener("click",() => {
    if(watchID) 
     return

    function handleSuccess() {
        speendElement.innerText = position.coord.speed ? (position.coord.speed * 3.6).toFixed(1) : "0"
    }

    function handleError(error){
        console.log(error.ms);
    }
    const options = { ennableHighAccuracy: true }
    watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, options)

    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")
})

stopBtn.addEventListener("click",() => {
    if(!watchID)
        return

    navigator.geolocation.clearWatch(watchID)
    watchID == null    
    startBtn.classList.remove("d-none")
    stopBtn.classList.add("d-none")
})