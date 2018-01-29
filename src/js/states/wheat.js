var Player = require('../entities/player');

var Wheat = function () {
  this.player = null;
  this.ground = null;
  this.water = null;
  this.groundDecor = null;
  this.air = null;
  this.house = null;
  this.door = null;
  this.wheat = null;

  this.cursors;
  this.keySelect;
};

module.exports = Wheat;

Wheat.prototype = {

  preload: function () {
  },

  create: function () {
	//  We're going to be using physics, so enable the Arcade Physics system
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	this.game.stage.backgroundColor = '#d1edef';

	this.game.world.setBounds(0, 0, 2500, 600);



	//  The group contains the ground player can walk on
	this.ground = this.game.add.group();

	//  We will enable physics for any object that is created in this group
	this.ground.enableBody = true;

	// Here we create the ground.
	var a = null;
	for (var i = 1200; i < 2450; i = i+50)
	{
	  a = this.ground.create(i, this.game.world.height - 50, 'ground-wheat');
	  a.body.immovable = true;
	}
	for (var i = 0; i < 150; i = i+50)
	{
	  a = this.ground.create(i, this.game.world.height - 50, 'ground-grass');
	  a.body.immovable = true;
	}
	for (var i = 400; i < 1700; i = i+50)
	{
	  a = this.ground.create(i, this.game.world.height - 50, 'ground-grass');
	  a.body.immovable = true;
	}
	a = this.ground.create(2450, this.game.world.height - 50, 'ground-grass');
	a.body.immovable = true;


	this.air = this.game.add.group();
	this.air.create(50, 100, 'air-cloud');
	this.air.create(150, 150, 'air-cloud');
	this.air.create(250, 250, 'air-cloud');
	this.air.create(400, 100, 'air-cloud');
	this.air.create(550, 200, 'air-cloud');
	this.air.create(650, 150, 'air-cloud');
	//this.air.create(800, 250, 'air-cloud');
	this.air.create(1000, 200, 'air-cloud');
	this.air.create(1050, 100, 'air-cloud');
	this.air.create(1250, 100, 'air-cloud');
	this.air.create(1300, 150, 'air-cloud');
	this.air.create(1450, 200, 'air-cloud');
	this.air.create(1600, 100, 'air-cloud');
	this.air.create(1700, 250, 'air-cloud');
	this.air.create(1800, 150, 'air-cloud');
	this.air.create(1900, 100, 'air-cloud');
	this.air.create(2100, 150, 'air-cloud');
	this.air.create(2250, 200, 'air-cloud');
	this.air.create(2400, 150, 'air-cloud');

	this.house = this.game.add.group();
	// build house columns
	this.air.create(650, this.game.world.height - 250, 'house-roofleftoutside');

	for (var i = 100; i < 250; i = i+50)
	  this.air.create(700, this.game.world.height - i, 'house-stone');
	this.air.create(700, this.game.world.height - 250, 'house-roofleft');
	this.air.create(700, this.game.world.height - 300, 'house-roofleftoutside');

	this.air.create(750, this.game.world.height - 100, 'house-windowbottom');
	this.air.create(750, this.game.world.height - 150, 'house-windowtop');
	this.air.create(750, this.game.world.height - 200, 'house-stone');
	this.air.create(750, this.game.world.height - 250, 'house-stone');
	this.air.create(750, this.game.world.height - 300, 'house-roofleft');
	this.air.create(750, this.game.world.height - 350, 'house-roofleftoutside');

	for (var i = 100; i < 350; i = i+50)
	  this.air.create(800, this.game.world.height - i, 'house-stone');
	this.air.create(800, this.game.world.height - 350, 'house-roofleft');
	this.air.create(800, this.game.world.height - 400, 'house-roofleftoutside');

	this.door = this.game.add.group();
	this.door.enableBody = true;
	a = this.door.create(850, this.game.world.height - 100);
	a.body.immovable = true;

	this.air.create(850, this.game.world.height - 100, 'house-door');

	this.air.create(850, this.game.world.height - 150, 'house-stone');
	this.air.create(850, this.game.world.height - 200, 'house-stone');
	this.air.create(850, this.game.world.height - 250, 'house-stone');
	this.air.create(850, this.game.world.height - 300, 'house-window');
	this.air.create(850, this.game.world.height - 350, 'house-stone');
	this.air.create(850, this.game.world.height - 400, 'house-rooftop');

	for (var i = 100; i < 350; i = i+50)
	  this.air.create(900, this.game.world.height - i, 'house-stone');
	this.air.create(900, this.game.world.height - 350, 'house-roofright');
	this.air.create(900, this.game.world.height - 400, 'house-roofrightoutside');

	this.air.create(950, this.game.world.height - 100, 'house-windowbottom');
	this.air.create(950, this.game.world.height - 150, 'house-windowtop');
	this.air.create(950, this.game.world.height - 200, 'house-stone');
	this.air.create(950, this.game.world.height - 250, 'house-stone');
	this.air.create(950, this.game.world.height - 300, 'house-roofright');
	this.air.create(950, this.game.world.height - 350, 'house-roofrightoutside');

	for (var i = 100; i < 250; i = i+50)
	  this.air.create(1000, this.game.world.height - i, 'house-stone');
	this.air.create(1000, this.game.world.height - 250, 'house-roofright');
	this.air.create(1000, this.game.world.height - 300, 'house-roofrightoutside');

	this.air.create(1050, this.game.world.height - 250, 'house-roofrightoutside');



	this.player = new Player(this.game, 1500, this.game.height-100);
	// need y middle so we can mirror for running left
	this.player.anchor.setTo(0.5, 0);
	this.game.physics.arcade.enable(this.player);
	this.player.body.bounce.y = 0.2;
	this.player.body.gravity.y = 300;
	this.player.body.collideWorldBounds = true;
	//  Our two animations, walking left and right.
	this.player.animations.add('left', [0, 1, 2, 3], 10, true);
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);

	this.game.camera.follow(this.player);



	this.groundDecor = this.game.add.group();
	// grass over the ground
	for (var i = 0; i < 150; i = i+50)
	  this.groundDecor.create(i, this.game.world.height - 100, 'grass-grass');
	for (var i = 400; i < 1700; i = i+50)
	{
	  // no grass in front of door
	  if (i != 850)
		this.groundDecor.create(i, this.game.world.height - 100, 'grass-grass');
	}
	this.groundDecor.create(2450, this.game.world.height - 100, 'grass-grass');

	this.water = this.game.add.group();
	for (var i = 150; i < 400; i = i+50)
	{
	  // add 10px of ground so you can jump out of water
	  a = this.ground.create(i, this.game.world.height - 10);
	  a.body.immovable = true;
	  a = this.water.create(i, this.game.world.height - 50, 'ground-water');
	  a.alpha = 0.8;
	}

	this.wheat = this.game.add.group();
	this.wheat.enableBody = true;
	// wheat that can be picked up
	for (var i = 1700; i < 2450; i = i+50)
	{
	  a = this.wheat.create(i, this.game.world.height - 100, 'grass-wheat');
	}


	this.wheatText = this.game.add.text(16, 16, this.getTextWheat(), { fontSize: '22px', fill: '#000' });
	this.wheatText.fixedToCamera = true;
	this.wheatText.cameraOffset.setTo(16, 16);

	//  Our controls.
	this.cursors = this.game.input.keyboard.createCursorKeys();
	this.keySelect = this.game.input.keyboard.addKey(32); // space
  },

  update: function () {
	//  Collide the player and the ground
	var hitGround = this.game.physics.arcade.collide(this.player, this.ground);

	this.game.physics.arcade.overlap(this.player, this.wheat, this.collectWheat, null, this);
	this.game.physics.arcade.overlap(this.player, this.door, this.enterDoor, null, this);

	//  Reset the players velocity (movement)
	this.player.body.velocity.x = 0;

	if (this.cursors.left.isDown)
	{
		//  Move to the left
		this.player.scale.x = -1;
		this.player.body.velocity.x = -150;
		this.player.animations.play('left');
	}
	else if (this.cursors.right.isDown)
	{
		//  Move to the right
		this.player.scale.x = 1;
		this.player.body.velocity.x = 150;
		this.player.animations.play('right');
	}
	else
	{
		//  Stand still
		this.player.animations.stop();
		this.player.frame = 0;
	}
	
	//  Allow the player to jump if they are touching the ground.
	if (this.cursors.up.isDown && this.player.body.touching.down)
	{
		this.player.body.velocity.y = -150;
	}

  },

  collectWheat: function(me, wheat)
  {
	// check if button is pressed to collect the wheat
	if (this.keySelect.isDown)
	{
	  wheat.kill();
	  this.addGrain();
	}
  },

  addGrain: function(val)
  {
	// if no val, choose by random
	playerState.inventory.grainWheat += 5;
	this.wheatText.text = this.getTextWheat();
  },

  getTextWheat: function()
  {
	 return 'Wheat Grain: ' + playerState.inventory.grainWheat;
  },

  enterDoor: function () {
	if (this.keySelect.isDown)
	 this.game.state.start('Menu');
  }
};
