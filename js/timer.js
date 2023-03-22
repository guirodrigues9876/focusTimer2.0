

export default function Timer({
    minutesDisplay,
    secondsDisplay
}){

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)


    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        updateMinutes(minutes)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function countDown(){
    
        timerTimeOut = setTimeout(function(){
            
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <=0
            
            updateDisplay(minutes, 0)
            
            if(isFinished){
                return
            }
            
            if( seconds <= 0){
                seconds = 60
                --minutes
            }
            
            
            updateDisplay(minutes, String(seconds -1))
            
            countDown()
        }, 1000) 
        
    }
    
    function addMinutes(){
        minutes = minutes + 5
        updateDisplay(minutes)
    }

    function removeMinutes(){
        let Iszero = minutes <= 0
        if(Iszero){
            return
        }
        minutes = minutes -5
        updateDisplay(minutes)
    }

    function hold(){
        clearTimeout(timerTimeOut)
        itsOn = false
    }

    return{
        updateDisplay,
        updateMinutes,
        countDown,
        addMinutes,
        removeMinutes,
        hold,
        Timer,
    }

}