//indentar ALT+SHIFT+F
import { CST } from "../src/CST.js";
export default class LaodScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    preload() {
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0xc62828, 0.8);
        progressBox.fillRect(150, 270, 320, 50);
        let width = this.cameras.main.width;
        let height = this.cameras.main.height;
        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'CARGANDO...',
            style: {
                font: '20px zelda-regular',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        let percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px zelda-regular',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        let assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(160, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        //AQUI ES DONDE SE CARGAN TODOS LOS ASSETS, SPRITESHEETS, ATLAS, TILES, SONIDOS, ETC...
        /*for (var i = 0; i < 500; i++) {
            this.load.image('relleno'+i, 'assets/logo/PopStarLogo.png');
        }*/

        //Menu
        this.load.image('nohierba', 'assets/titlescreen/nograss.png');
        this.load.image('hierba', 'assets/titlescreen/grass.png');
        this.load.image('logo', 'assets/titlescreen/logoelysium.png');
        this.load.image('play_buttom', 'assets/titlescreen/play_buttom.png');
        this.load.image('play_selected', 'assets/titlescreen/play_buttom_selection.png');
        this.load.audio('title_music', 'assets/audio/music/prueba.mp3');

        //SPRITES DE PERSONAJES
        this.load.spritesheet('hero', 'assets/player/player.png', { frameHeight: 32, frameWidth: 32 });
        this.load.spritesheet('cobra','assets/enemies/cobras.png', { frameHeight: 32, frameWidth: 32 });

        //MAPAS Y DEMÁS
        this.load.image('dungeon', 'assets/map/dungeon32x32.png');
        this.load.tilemapTiledJSON("nivel1", "assets/niveles/nivel1.json");

        //HUD
        this.load.image('vida3', 'assets/hud/vida_3.png');
        this.load.image('vida2', 'assets/hud/vida_2.png');
        this.load.image('vida1', 'assets/hud/vida_1.png');
        this.load.image('vida0', 'assets/hud/vida_0.png');

    }
    create() {
        this.scene.start(CST.SCENES.MENU);
    }
}