export default class BlackHole extends Phaser.GameObjects.Graphics {
	/**
	 *  My custom graphic.
	 *
	 *  @constructor
	 *  @class BlackHole
	 *  @extends Phaser.GameObjects.Sprite
	 *  @param {Phaser.Scene} scene - The scene that owns this graphic.
	 *  @param {object} [options={}] - Configuration parameters of this graphic.
	 *  @param {number} options.x - The horizontal coordinate relative to the scene viewport.
	 *  @param {number} options.y - The vertical coordinate relative to the scene viewport.
	 */
	constructor(scene) {
		super(scene);

		const x = scene.cameras.main.width / 2;
		const y = scene.cameras.main.height / 2;

		this.centerCircle = new Phaser.Geom.Circle(x, y, 15);

		this.setPosition(x, y);
		this.setOrigin(0.5);
	}

	update() {
		this.fillStyle('#233644', 1);
	}
}
