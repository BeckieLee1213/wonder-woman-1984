scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f 5 f f . . . . . 
    . . . . . f f 5 2 5 f f . . . . 
    . . . . f f 2 2 2 2 2 f f . . . 
    . . . . f f d d d d d f f . . . 
    . . . . f f d e d e d f f . . . 
    . . . f f f d d d d d f f f . . 
    . . f f f f f d d d f f f f f . 
    . . f f f f d 2 2 2 d f f f f . 
    . . . . f f 5 2 5 2 5 f f . . . 
    . . . . . f d 8 8 8 d f . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . d . d . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tiles.createTilemap(hex`10001000010505050505050505050505050505040a00000009090909090000000000090706090900090909090900090909000907060909000909090909000909090009070609090000000009090009090900090706090909090900000000090909000907060000000009090909090909090009070600090900000909090000000900000006000909090000000000090009090900060009090909090909090900090909000600000000000000000909000909090006090909090909090009090000000000060000000000090900090909090909070600090909000909000000000000090706000909090009090909090909000907030b0808080000000000000000000802`, img`
    2 2 2 2 2 . . . 2 2 2 2 2 2 2 . 
    . . . . 2 . . . 2 . . . . . 2 . 
    2 2 2 . 2 . . . 2 . 2 2 2 . 2 . 
    . . 2 . 2 2 2 2 2 . 2 . 2 . 2 . 
    . . 2 . . . . 2 2 . 2 . 2 . 2 . 
    2 2 2 2 2 2 . . . . 2 . 2 . 2 . 
    2 . . . . 2 2 2 2 2 2 2 2 . 2 2 
    2 . 2 2 . . 2 2 2 . . . 2 . . . 
    2 . 2 2 2 . . . . . 2 . 2 2 2 . 
    2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
    2 . . . . . . . . 2 2 . 2 2 2 . 
    2 2 2 2 2 2 2 2 . 2 2 . . . . . 
    2 . . . . . 2 2 . 2 2 2 2 2 2 2 
    2 . 2 2 2 . 2 2 . . . . . . 2 . 
    2 . 2 . 2 . 2 2 2 2 2 2 2 . 2 . 
    2 . 2 . 2 . . . . . . . . . 2 . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.builtin.brick,sprites.castle.shrub], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.builtin.brick)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
