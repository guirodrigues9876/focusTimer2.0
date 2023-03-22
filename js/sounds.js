export default function(){

    const forest = new Audio("./sounds/Floresta.wav")
    const rain = new Audio("./sounds/Chuva.wav")
    const coffee = new Audio("./sounds/Cafeteria.wav")
    const fireplace = new Audio("./sounds/lareira.wav")
  
    let isPlaying = false

    function forestAudioStart(){

        if(isPlaying){
            forest.pause()
            isPlaying = false
        }else{
            forest.play()
            isPlaying = true
        } 

    }

    function rainAudioStart(){

        if(isPlaying){
            reset()
            rain.pause()
            isPlaying = false
        }else{
            rain.play()
            isPlaying = true
        }
    }

    function reset(){

        forest.pause()
        rain.pause()
        coffee.pause()
        fireplace.pause()
    
    }


    return{
        reset,
        forest,
        rain,
        coffee,
        fireplace,
        forestAudioStart,
        rainAudioStart
    }

}