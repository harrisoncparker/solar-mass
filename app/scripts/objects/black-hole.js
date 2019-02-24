export default class BlackHole extends Phaser.GameObjects.Sprite {
	/**
	 *  @constructor
	 *  @class BlackHole
	 *  @extends Phaser.GameObjects.Sprite
	 *  @param {Phaser.Scene} scene - The scene that owns this sprite.
	 */
	constructor(scene) {
		super(scene, 0, 0, 'black-hole-sprite');

		this.setPosition(
			scene.cameras.main.width / 2,
			scene.cameras.main.height / 2
		);
		this.setOrigin(0.5);
		this.setScale(0.3);
	}
}
