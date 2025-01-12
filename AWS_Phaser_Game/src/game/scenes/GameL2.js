import { EventBus } from '../EventBus';
import { GameScene } from './GameScene';

export class GameL2 extends GameScene
{
    constructor ()
    {
        super('GameL2');
    }

    create ()
    {
        super.create();

        //import tilemap
        const map = this.make.tilemap({ key: 'l2' });

        const tileset = map.addTilesetImage('tilemap', 'tileset');

        const cactus = map.createLayer('Cactus', tileset, 0, 0).setScale(3);
        const foreground = map.createLayer('Foreground', tileset, 0, 0).setScale(3);

        foreground.setCollisionByProperty({ collides: true });
        cactus.setCollisionByProperty({ collides: true });
        
        this.physics.add.collider(this.dino, foreground);
        this.physics.add.collider(this.dino, cactus, this.loseLife, null, this);


        //set boundaries
        this.cameras.main.setBounds(0, 0, map.widthInPixels * 3, map.heightInPixels * 3);
        this.physics.world.setBounds(0, 0, map.widthInPixels * 3, map.heightInPixels * 3);


        EventBus.emit('current-scene-ready', this);
    }

    update ()
    {
        super.update();
    }

    pauseGame ()
    {
        this.scene.pause();
        this.scene.launch('PauseMenu', { returnScene: 'GameL2' });
    }

    resumeGame ()
    {
        this.scene.resume('GameL2');
    }

}
