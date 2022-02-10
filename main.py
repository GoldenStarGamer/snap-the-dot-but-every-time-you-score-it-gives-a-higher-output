def on_button_pressed_a():
    if sprite.get(LedSpriteProperty.X) == 2:
        game.add_score(10)
    else:
        game.game_over()
input.on_button_pressed(Button.A, on_button_pressed_a)

sprite: game.LedSprite = None
sprite = game.create_sprite(1, 2)

def on_forever():
    pins.analog_write_pin(AnalogPin.P0, abs(game.score()))
basic.forever(on_forever)

def on_forever2():
    sprite.move(1)
    basic.pause(200)
    sprite.if_on_edge_bounce()
basic.forever(on_forever2)
