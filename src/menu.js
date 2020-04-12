//indentar ALT+SHIFT+F
import { CST } from "../src/CST.js";
export default class Menu extends Phaser.Scene {

  constructor() {
    super({ key: CST.SCENES.MENU });
  }

  create() {
    this.nograss = this.add.tileSprite(0, 0, 600, 400, 'nohierba');
    this.nograss.setOrigin(0, 0);
    this.grass = this.add.tileSprite(300, 200, 600, 400, 'hierba');
    this.logo = this.add.tileSprite(300, 100, 700, 400, 'logo');
    let playButtom = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'play_buttom');
    let pbSelection = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'play_selected');
    pbSelection.setVisible(false);

    playButtom.setInteractive();

    playButtom.on("pointerover", () => {
      pbSelection.setVisible(true);
    })

    playButtom.on("pointerup", () => {
      this.scene.start(CST.SCENES.PLAY)
    })

    playButtom.on("pointerout", () => {
      pbSelection.setVisible(false);
    })

    //background music
    //https://www.youtube.com/watch?v=s22bAaMRGic
    //this.sound.pauseOnBlur = false;
    //this.sound.play('title_music');

  }

  update(time, delta) {
    this.grass.tilePositionX -= .1;
  }
}