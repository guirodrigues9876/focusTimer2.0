
import {
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonFire
} from "./elements.js"

import Sounds from "./sounds.js"
import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"

const sound = Sounds()


const controls = Controls(
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonForest
)

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})



Events({controls, timer, sound})
