import { EntityQueryOptions, Location, MinecraftEffectTypes, world } from "mojang-minecraft";

let currentTick = 0;

function test() {
    let players = world.getDimension("overworld").getPlayers(new EntityQueryOptions());
    for(let player of players){
        if(player.getEffect(MinecraftEffectTypes.slowFalling)==null){
            player.addEffect(MinecraftEffectTypes.slowFalling, 2000, 0, false);
        }
        if(player.getEffect(MinecraftEffectTypes.jumpBoost)==null){
            player.addEffect(MinecraftEffectTypes.jumpBoost, 2000, 4, false);
        }
        if(player.location.y <= -64){
            player.teleport(new Location(player.location.x, 128, player.location.z), world.getDimension("overworld"), player.rotation.x, player.rotation.y, true);
        }
    }
}
world.events.tick.subscribe(test);