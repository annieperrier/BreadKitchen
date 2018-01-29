var Preloader = function (game) {
	this.asset = null;
	this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

	preload: function () {
		var x = this.game.width / 2;
		var y = this.game.height / 2;

		this.asset = this.add.sprite(x, y, 'preloader');
		this.asset.anchor.setTo(0.5, 0.5);

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
		this.load.setPreloadSprite(this.asset);

		this.load.spritesheet('start-button', 'assets/buttons-menu-start.png', 150, 60);
 
		this.load.spritesheet('player', 'assets/player.png', 50, 50);
 
		this.load.image('ground-wheat', 'assets/ground-wheat.png');
		this.load.image('ground-grass', 'assets/ground-grass.png');
		this.load.image('ground-water', 'assets/ground-water.png');
		this.load.image('grass-wheat', 'assets/grass-wheat.png');
		this.load.image('grass-grass', 'assets/grass-grass.png');
		this.load.image('air-cloud', 'assets/air-cloud.png');
		this.load.image('house-stone', 'assets/house-stone.png');
		this.load.image('house-door', 'assets/house-door.png');
		this.load.image('house-window', 'assets/house-window.png');
		this.load.image('house-windowtop', 'assets/house-windowtop.png');
		this.load.image('house-windowbottom', 'assets/house-windowbottom.png');
		this.load.image('house-roofleft', 'assets/house-roofleft.png');
		this.load.image('house-roofleftoutside', 'assets/house-roofleftoutside.png');
		this.load.image('house-roofright', 'assets/house-roofright.png');
		this.load.image('house-roofrightoutside', 'assets/house-roofrightoutside.png');
		this.load.image('house-rooftop', 'assets/house-rooftop.png');
	},

	create: function () {
		this.asset.cropEnabled = false;
	},

	update: function () {
		if (!!this.ready) {
			this.game.state.start('Menu');
		}
	},

	onLoadComplete: function () {
		this.ready = true;
	}
};
