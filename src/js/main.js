'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'breadkitchen-game');

window.Utils = require('./utils');
window.playerState = {
	currentLevel: 'Kitchen',
	inventory:
	{
		grainWheat: 0
	}
}

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
//game.state.add('Game', require('./states/game'));

//game.state.add('Wheat', require('./states/wheat'));
game.state.add('Kitchen', require('./states/kitchen'));

game.state.start('Boot');

/*

Steps to game:
- white flour - 10g
- water - 10g
- stir
- clock - 12hrs

- animation puffs

- keep starter - 20g
- white flour - 20g
- water - 20g
- stir
- clock - 12hrs


*/