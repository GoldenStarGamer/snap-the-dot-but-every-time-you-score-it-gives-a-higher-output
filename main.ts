input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(debug)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.AB, function () {
    debug = 10
})
input.onButtonPressed(Button.B, function () {
    debug = 1000
})
let sprite: game.LedSprite = null
let debug = 0
debug = 10
sprite = game.createSprite(1, 2)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.abs(game.score()))
})
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})
