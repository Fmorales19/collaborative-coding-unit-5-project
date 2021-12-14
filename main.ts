controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function chamgeScore (Score: number) {
    info.changeScoreBy(1)
    music.beamUp.play()
}
let mySprite: Sprite = null
scene.setBackgroundColor(9)
let hahah = sprites.create(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ......6666.cccc.........
    .....677776.ccccccc.....
    ....67777776c555555cc...
    ...677777777655555555c..
    ..67777777776555555555c.
    .6777777777655bcc555555c
    .6777777776555555c55d55c
    .6777777765555555555555c
    .677777765dd5555bb1bbbc.
    .67777765ddddd55bbb335c.
    ..66666dddddddd5bb3335c.
    .ccccdddddddddd55b3335c.
    cdcccdddddb55bbd553335c.
    cddbddddddb555bb55555c..
    cddddddddddb5555bbccc...
    ccddddddbd55bb55cbc.....
    .ccddddbbbdd55ccbdc.....
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `, SpriteKind.Player)
controller.moveSprite(hahah, 200, 200)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    while (info.life() > 0) {
        mySprite.destroy()
        mySprite.startEffect(effects.fire, 500)
        chamgeScore(1)
    }
})
