export default class Cobra extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);  
        this.health = 1;
        this.damage = 1;
        this.body.setCollideWorldBounds(true);
        this.setScale(2);
        this.body.setSize(20, 15, 0, 0).setOffset(3, 18);

        scene.anims.create({
            key: "cobra-idle",
            frameRate: 5,
            repeat: -1,
            frames: scene.anims.generateFrameNames('cobra', {
                start: 0, end: 7
            })
        });
        scene.anims.create({
            key: "cobra-move",
            frameRate: 10,
            repeat: -1,
            frames: scene.anims.generateFrameNames('cobra', {
                start: 8, end: 15
            })
        });
        scene.anims.create({
            key: "cobra-hurt",
            frameRate: 10,
            repeat: -1,
            frames: scene.anims.generateFrameNames('cobra', {
                start: 32, end: 35
            })
        })
        scene.anims.create({
            key: "cobra-rip",
            frameRate: 10,
            repeat: -1,
            frames: scene.anims.generateFrameNames('cobra', {
                start: 40, end: 45
            })
        })
        scene.anims.create
        this.play("cobra-idle");
        scene.physics.world.enableBody(this);
    }
    update(){
    
    }
}