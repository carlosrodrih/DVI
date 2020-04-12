import { CST } from "./CST.js";
import Player from './player.js';
import Cobra from './cobra.js';

export default class Game extends Phaser.Scene{
    constructor(){
        super({key:CST.SCENES.LOGIC})
    }

    //funcion para cambiar el nivel

    //Colisiones
    setCollisions(mapa){
        //Colisiones con el mapa
        //Colisones con enemigos
    }

    //Actualizar la HUD

    //Funciones de ataques enemigos
    /*attackEnemy(player, enemy){
        if(player.body.touching.down){
            player.body.setVelocityY(300);
        }
        else if(player.body.touching.left){
            player.body.setVelocityX(+300);
        }
        else if(player.body.touching.right){
            player.body.setVelocityX(-300);
        }
        else if(player.body.touching.up){
            player.body.setVelocityY(-300)
        }
        player.play("hurt", true);
    }
    damagePlayer(player, enemy){
        player.health -= enemy.damage;
    }

    damageEnemy(player, enemy){
        enemy.health -= player.damage;
    }*/
    
}