var Menu = function () {
	this.text = null;
};

module.exports = Menu;

Menu.prototype = {

	preload: function () {
	},

	create: function () {
		this.game.stage.backgroundColor = '#f9f8ef';
		var x = this.game.width / 2;
		var y = this.game.height / 2;

		var style = { font: "45px Tahoma", fill: "#AAC7CA", align: "center" };
		this.text = this.add.text(x - 120, y - 180, "Welcome to", style);

		var style = { font: "65px Arial Black", fill: "#D7CDAA", align: "center" };
		this.text = this.add.text(x - 215, y - 120, "Bread", style);
		var style = { font: "65px Arial Black", fill: "#56667D", align: "center" };
		this.text = this.add.text(x + 5, y - 120, "Kitchen", style);

		button = this.add.button(x - 75, 300, 'start-button', this.onDown, this, 1, 0, 2);

		//this.input.onDown.add(this.onDown, this);
	},

	update: function () {
	},

	onDown: function () {
		this.game.state.start(playerState.currentLevel);
	}
};
