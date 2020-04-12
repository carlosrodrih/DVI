export default class Hud extends Phaser.Scene {
    constructor(scene) {
        super({ key: 'Hud' });
        this.hud = scene.add.sprite(300, 200, 'vida3');
        this.hud.setDepth(20);
        this.hud.setTexture('vida3');
    }

    updateHud(health) {
        if (health === 3) {
            this.hud.setTexture('vida3');
        }
        else if (health === 2) {
            this.hud.setTexture('vida2')
        }
        else if (health === 1) {
            this.hud.setTexture('vida1')
        }
        else if (health === 0) {
            this.hud.setTexture('vida0')
        }
    }

}