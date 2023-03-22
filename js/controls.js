import { buttonForest, buttonRain, buttonCoffee, buttonFire } from "./elements.js"

export default function Controls({
    // buttonForest
}){

    // const forestCardOn = document.querySelector('.forest')

    function forestCardActive(){

        buttonForest.classList.toggle('card-on')

        buttonRain.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonFire.classList.remove('card-on')

    }

    function rainCardActive(){
        buttonRain.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonFire.classList.remove('card-on')
    }

    function coffeeCardActive(){
        buttonCoffee.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonRain.classList.remove('card-on')
        buttonFire.classList.remove('card-on')

    }

    function fireCardActive(){
        buttonFire.classList.toggle('card-on')

        buttonForest.classList.remove('card-on')
        buttonCoffee.classList.remove('card-on')
        buttonRain.classList.remove('card-on')
    }

    
    return{
        forestCardActive,
        rainCardActive,
        coffeeCardActive,
        fireCardActive
    }
}
