mobs.onMobKilled(CHICKEN, function () {
    agent.teleport(pos(0, 0, 0), WEST)
})
player.onItemInteracted(IRON_PICKAXE, function () {
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
})
player.onTravelled(FLY, function () {
    player.execute(
    "say Hi!"
    )
    gameplay.setWeather(THUNDER)
    agent.attack(FORWARD)
    agent.attack(BACK)
    agent.attack(LEFT)
    agent.attack(RIGHT)
    agent.attack(UP)
    agent.attack(DOWN)
    agent.move(FORWARD, 1)
})
mobs.spawn(CHICKEN, pos(0, 0, 0))
mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 10, 1)
loops.pause(50)
blocks.replace(
CAMPFIRE,
GRASS,
pos(0, 0, 0),
pos(0, 0, 0)
)
