input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
	
})
let player: game.LedSprite = null
player = game.createSprite(0, 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            player.move(1)
        }
        player.turn(Direction.Right, 90)
    }
})
