var config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  parent: 'game',
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: {
        showBody: true,
        showStaticBody: true
      }
    },
  },
};

var game = new Phaser.Game(config);

function create() {
  this.cameras.main.setBackgroundColor("#A5D1FE");
  if (objectData == undefined) {
    objectData = this.cache.json.get('shapes');
  }
  //  var ground = this.matter.add.sprite(game.config.width / 2, game.config.height * .5, 'groundImage', null, { shape: objectData.shapes[0].ground });
  var ground = this.matter.add.sprite(game.config.width / 2, game.config.height / 2, 'groundImage', null, { shape: objectData.shapes[0].ground });
  ground.body.isStatic = true;
  //ground.setScale(.8);
  // console.log(ground.body);
  ground.setPosition(game.config.width * .597 + ground.centerOfMass.x, 500 + ground.centerOfMass.y);  // position (0,280)
  fulcrum = this.matter.add.sprite(game.config.width * .4, game.config.height * .7, 'fulcrum', null, { shape: objectData.shapes[0].fulcrum });
  ball = this.matter.add.sprite(game.config.width * .34, game.config.height * .6, 'ball', null, { shape: objectData.shapes[0].ball });
  ball2 = this.matter.add.sprite(game.config.width * .87, game.config.height * .1, 'ball2', null, { shape: objectData.shapes[0].ball2 });
  pusher = this.matter.add.sprite(game.config.width * .97, game.config.height * .2, 'pusher', null, { shape: objectData.shapes[0].pusher }).setScale(.15);
  guy1 = this.matter.add.sprite(game.config.width * .03, game.config.height * .48, 'guy1', null, { shape: objectData.shapes[0].guy1 }).setScale(.6);
  guy2 = this.matter.add.sprite(game.config.width * .13, game.config.height * .78, 'guy2', null, { shape: objectData.shapes[0].guy1 }).setScale(.6);
  guy3 = this.matter.add.sprite(game.config.width * .5, game.config.height * .78, 'guy1', null, { shape: objectData.shapes[0].guy1 }).setScale(.6).setAngle(90);
  guy4 = this.matter.add.sprite(game.config.width * .65, game.config.height * .76, 'guy4', null, { shape: objectData.shapes[0].guy4 });
  this.anims.create({
    key: 'push',
    frames: this.anims.generateFrameNumbers('pusher', { start: 1, end: 15 }),
    frameRate: 10,
    repeat: 0
  });

  this.input.on('pointerdown', function (pointer) {
    pusher.anims.play('push');
  }, this);

  this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
}
function update() {
  if (pusher.anims.isPlaying) {
    pusher.x -= .5;
  }
}