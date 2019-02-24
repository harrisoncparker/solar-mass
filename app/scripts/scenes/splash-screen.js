export default class SplashScreen extends Phaser.Scene {
	/**
	 *  Takes care of loading the main game assets, including textures, tile
	 *  maps, sound effects and other binary files, while displaying a busy
	 *  splash screen.
	 *
	 *  @extends Phaser.Scene
	 */
	constructor() {
		super({
			key: 'SplashScreen',
			pack: {
				files: [
					{
						key: 'splash-screen',
						type: 'image'
					},
					{
						key: 'progress-bar',
						type: 'image'
					}
				]
			}
		});
	}

	/**
	 *  Show the splash screen and prepare to load game assets.
	 *
	 *  @protected
	 */
	preload() {
		//  HINT: Declare all game assets to be loaded here.
		this.load.image('black-hole-sprite');
	}

	/**
	 *  Set up animations, plugins etc. that depend on the game assets we just
	 *  loaded.
	 *
	 *  @protected
	 */
	create() {
		this.scene.start('Game');
	}
}
