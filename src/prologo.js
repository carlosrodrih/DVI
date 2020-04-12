import { CST } from "./CST.js";
import Player from "./player.js";
import Cobra from "./cobra.js";
import Hud from "./hud.js";
var map;
var layer;
export default class Prologo extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.PLAY });
    }

    preload() {
        //Hay que cambiar esto a la pantalla de carga
       
    }

    create() {
        this.player = new Player(this, 100, 120, 'hero');
        this.cobra = new Cobra(this,400,150,'cobra');
        this.hud = new Hud(this);


        let mappy = this.add.tilemap("nivel1");

        let ground = mappy.addTilesetImage("dungeon32x32", "dungeon");

        let floorLayer = mappy.createStaticLayer("floor", [ground], 0, 0).setDepth(-1);
        let wallsLayer = mappy.createStaticLayer("walls", [ground], 0, 0);
        
        //map collision
        this.physics.add.collider(this.player, wallsLayer);
        this.physics.add.collider(this.cobra, wallsLayer);
        this.physics.add.collider(this.player,this.cobra, this.damageCallBack,null,this);
        wallsLayer.setCollisionByProperty({collides: true });
    }

    damageCallBack(){
        if(this.player.body.touching.down){
            console.log("estoy siendo tocado por debajo")
            this.player.body.setVelocityY(-600);
        }
        else if(this.player.body.touching.left){
            console.log("estoy siendo tocado por izquierda")
            this.player.body.setVelocityX(+600);
        }
        else if(this.player.body.touching.right){
            console.log("estoy siendo tocado por derecha")
            this.player.body.setVelocityX(-600);
        }
        else if(this.player.body.touching.up){
            console.log("estoy siendo tocado por encima")
            this.player.body.setVelocityY(600)
        }
        this.player.play("hurt", true);
        this.player.health -= 1;
    }

    update(time, delta) {
        this.player.update(time, delta);
        this.hud.updateHud(this.player.health);
    }

    /*detectKeyInput(){
      //assign direction for character & set x,y speed components
      if (upKey.isDown) 
      {
          dY = -1;
      }
      else if (downKey.isDown)
      {
          dY = 1;
      }
      else
      {
          dY = 0;
      }
      if (rightKey.isDown)
      {
          dX = 1;
          if (dY == 0)
          {
              facing = "este";
          }
          else if (dY == 1)
          {
              facing = "sureste";
              dX = dY = 0.5;
          }
          else
          {
              facing = "noroeste";
              dX = 0.5;
              dY = -0.5;
          }
      }
      else if (leftKey.isDown)
      {
          dX = -1;
          if (dY == 0)
          {
              facing = "oeste";
          }
          else if (dY == 1)
          {
              facing = "suroeste";
              dY = 0.5;
              dX = -0.5;
          }
          else
          {
              facing = "noroeste";
              dX = dY = -0.5;
          }
      }
      else
      {
          dX = 0;
          if (dY == 0)
          {
              //facing = "oeste";
          }
          else if (dY == 1)
          {
              facing = "sur";
          }
          else
          {
              facing = "norte";
          }
      }
  }
  
    update(){
    //check key press
    detectKeyInput();
    //if no key is pressed then stop else play walking animation
    if (dY == 0 && dX == 0)
    {
        sorcerer.animations.stop();
        sorcerer.animations.currentAnim.frame = 0;
    }else{
        if(sorcerer.animations.currentAnim != facing){
            sorcerer.animations.play(facing);
        }
    }
    //check if we are walking into a wall else move hero in 2D
    if (isWalkable())
    {
        heroMapPos.x +=  heroSpeed * dX;
        heroMapPos.y +=  heroSpeed * dY;
        heroMapSprite.x = heroMapPos.x - heroMapSprite.width/2;
        heroMapSprite.y = heroMapPos.y - heroMapSprite.height/2;
        //get the new hero map tile
        heroMapTile = getTileCoordinates(heroMapPos,tileWidth);
        //depthsort & draw new scene
        renderScene();
    }
  }

  getTileCoordinates(cartPt, tileHeight){
      var tempPt = new Phaser.Point();
      tempPt.x = Math.floor(cartPt.x/tileHeight);
      tempPt.y = Math.floor(cartPt.y/tileHeight);
      return(tempPt);
  }*/
}