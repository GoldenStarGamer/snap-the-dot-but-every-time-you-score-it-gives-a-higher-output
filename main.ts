input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(debug)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.AB, function () {
    debug = 1
    debugtime = 200
})
input.onButtonPressed(Button.B, function () {
    debug = 1000
    debugtime = 1000
})
let sprite: game.LedSprite = null
let debug = 0
let debugtime = 0
debugtime = 200
debug = 1
sprite = game.createSprite(0, 2)
let ajuda = game.createSprite(2, 3)
let ajuda2 = game.createSprite(2, 1)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.abs(game.score()))
})
basic.forever(function () {
    sprite.move(1)
    basic.pause(debugtime)
    sprite.ifOnEdgeBounce()
})
