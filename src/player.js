import { CST } from "../src/CST.js";
/**
 * Esta clase contiene todo lo relación con el jugador.
 */
export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setScale(2);
        this.health = 3;
        this.body.setSize(20, 24, 0, 0).setOffset(5, 8);
        this.body.setCollideWorldBounds(true);

        this.scene.anims.create({
            key: "idle",
            frameRate: 5,
            repeat: -1,
            frames: scene.anims.generateFrameNames('hero', {
                start: 0, end: 12
            })
        });
        this.scene.anims.create({
            key: "move",
            frameRate: 10,
            repeat: -1,
            frames: scene.anims.generateFrameNames('hero', {
                start: 13, end: 20
            })
        })
        scene.anims.create({
            key: "attack",
            frameRate: 15,
            frames: scene.anims.generateFrameNames('hero', {
                start: 39, end: 48
            })
        })
        scene.anims.create({
            key: "hurt",
            frameRate: 10,
            frames: scene.anims.generateFrameNames('hero', {
                start: 78, end: 81
            })
        })
        this.play("idle", true);
        this.teclado = this.scene.input.keyboard.addKeys('W, A, S, D, SPACE');
    }

    /*hurtPlayer(){
        if(this.body.touching.down){
            console.log("estoy siendo tocado por debajo")
            this.body.setVelocityY(-600);
        }
        else if(this.body.touching.left){
            console.log("estoy siendo tocado por izquierda")
            this.body.setVelocityX(+600);
        }
        else if(this.body.touching.right){
            console.log("estoy siendo tocado por derecha")
            this.body.setVelocityX(-600);
        }
        else if(this.body.touching.up){
            console.log("estoy siendo tocado por encima")
            this.body.setVelocityY(600)
        }
        this.play("hurt", true);
        this.health -= 1;
        console.log("Player has " + this.health);
    }*/

    update() {

        if ((!this.anims.isPlaying || (this.anims.isPlaying && this.anims.currentAnim.key !== 'hurt') && (this.anims.isPlaying && this.anims.currentAnim.key !== 'attack')) && (this.teclado.D.isDown || this.teclado.W.isDown || this.teclado.S.isDown || this.teclado.A.isDown)) {
            if (this.teclado.D.isDown) {
                this.body.setVelocityX(CST.PHYSICS.PLAYERSPEED);
                this.play("move", true);
                this.flipX = false;
            }
            if (this.teclado.W.isDown) {
                this.body.setVelocityY(-CST.PHYSICS.PLAYERSPEED);
                this.play("move", true);
            }
            if (this.teclado.S.isDown) {
                this.body.setVelocityY(CST.PHYSICS.PLAYERSPEED);
                this.play("move", true);
            }
            if (this.teclado.A.isDown) {
                this.body.setVelocityX(-CST.PHYSICS.PLAYERSPEED);
                this.play("move", true);
                this.flipX = true;
            }
            //Ataques
        } else if (this.teclado.SPACE.isDown) {
            this.body.setVelocity(0);
            this.play("attack", true);
        }
        else if (!this.anims.isPlaying || (this.anims.isPlaying && this.anims.currentAnim.key !== 'attack') && (this.anims.isPlaying && this.anims.currentAnim.key !== 'hurt')) {
            this.body.setVelocity(0);
            this.play("idle", true);
        }
        this.body.velocity.normalize().scale(CST.PHYSICS.PLAYERSPEED);
    }
}