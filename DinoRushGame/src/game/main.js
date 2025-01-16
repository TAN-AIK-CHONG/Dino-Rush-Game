import { Boot } from './scenes/Boot';
import { GameL1 } from './scenes/GameL1';
import { GameL2 } from './scenes/GameL2';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { PauseMenu } from './scenes/PauseMenu';
import Phaser from 'phaser';
import { Preloader } from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade'
    },
    parent: 'game-container',
    backgroundColor: '#028af8',
    pixelArt: true,
    scene: [
        Boot,
        Preloader,
        MainMenu,
        GameL1,
        GameL2,
        GameOver,
        PauseMenu
    ]
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
