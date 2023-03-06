basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    `)
basic.setLedColor(0xffffff)
let Rot = 0
let Grün = 0
let Blau = 0
basic.forever(function () {
    for (let Blau = 0; Blau <= 250; Blau++) {
        basic.setLedColor(basic.rgb(Blau, 0, Blau))
        basic.pause(5)
    }
    basic.showLeds(`
        . . # . .
        # # # # #
        . # . . .
        . # . . .
        . . . . .
        `)
    for (let Blau = 0; Blau <= 250; Blau++) {
        basic.setLedColor(basic.rgb(0, Blau, Blau))
        basic.pause(5)
    }
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
})
