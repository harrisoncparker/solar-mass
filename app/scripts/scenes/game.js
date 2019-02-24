// import BlackHole from '@/objects/black-hole';

export default class Game extends Phaser.Scene {
	/**
	 *  A sample Game scene, displaying the Phaser logo.
	 *
	 *  @extends Phaser.Scene
	 */
	constructor() {
		super({key: 'Game'});
	}

	/**
	 *  Called when a scene is initialized. Method responsible for setting up
	 *  the game objects of the scene.
	 *
	 *  @protected
	 *  @param {object} data Initialization parameters.
	 */
	create() {
		this.graphics = this.add.graphics();

		// console.log(this.graphics);
		//
		// // this.blackHole = this.add.existing(new BlackHole(this));
		// this.blackhole = new Phaser.Geom.Circle(50, 50, 200);
		// // this.graphics.fillStyle('');


	}

	/**
	 *  Called when a scene is updated. Updates to game logic, physics and game
	 *  objects are handled here.
	 *
	 *  @protected
	 *  @param {number} t Current internal clock time.
	 *  @param {number} dt Time elapsed since last update.
	 */
	update(/* t, dt */) {
		// this.graphics.fillCircleShape(this.blackhole);
	}
}
