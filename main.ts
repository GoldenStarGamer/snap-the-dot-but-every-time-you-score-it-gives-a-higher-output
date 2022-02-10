input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(10)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(1, 2)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.abs(game.score()))
})
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})
