input.onButtonPressed(Button.A, function () {
    Timer += 1
    basic.showString("Timer")
    basic.showString("" + (Timer))
})
input.onButtonPressed(Button.AB, function () {
    Timer += 60
    basic.showString("" + (Timer))
})
input.onButtonPressed(Button.B, function () {
    Timer += -1
    basic.showString("Timer")
    basic.showString("" + (Timer))
})
let Timer = 0
let seconds = Timer
Timer = 0
let minutes = -1
let hours = -1
loops.everyInterval(1000, function () {
    seconds += -1
})
loops.everyInterval(60000, function () {
    minutes += 1
})
basic.forever(function () {
    basic.showNumber(minutes)
    basic.showString(":")
    basic.showNumber(seconds)
    if (seconds == 60) {
    	
    }
})
loops.everyInterval(3600000, function () {
    hours += 1
})
