import Menu from './menu.js';
import Prologo from './prologo.js';
import LoadScene from './load.js';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    pixelArt: true,
    input: {
        gamepad: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [LoadScene, Menu, Prologo],
    physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: true } }
}

new Phaser.Game(config);