import { 
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonFire
} from './elements.js'

let isPlaying = false

export default function ({controls, timer, sound}){

    buttonPlay.addEventListener("click", function (){
        timer.countDown()
    })
    
    buttonStop.addEventListener("click", function (){
        timer.hold()
    })
    
    buttonPlus.addEventListener("click", function (){
        timer.addMinutes()
    })
    
    buttonMinus.addEventListener("click", function (){
        timer.removeMinutes()
    })   
    
    buttonForest.addEventListener("click", function (){
        controls.forestCardActive()
        // sound.reset
        sound.forestAudioStart()
    
    })
    
    buttonRain.addEventListener("click", function (){
        
        controls.rainCardActive()
        // sound.reset()
        sound.rainAudioStart() 
    
    })
    
    buttonCoffee.addEventListener("click", function (){
        
        controls.coffeeCardActive()
        sound.reset()
        if(isPlaying){
            sound.coffee.pause()
            isPlaying = false
        }else{      
            sound.coffee.play()
            isPlaying = true
        } 
    
    })
    
    buttonFire.addEventListener("click", function (){
        
        controls.fireCardActive()
        sound.reset()
        if(isPlaying){
            sound.fireplace.pause()
            isPlaying = false
        }else{ 
            sound.fireplace.play()
            isPlaying = true
        } 
    
    })
    
}
