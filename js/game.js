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
  const shapes = objectData.shapes[0];
  fulcrum = this.matter.add.sprite(game.config.width * .4, game.config.height * .7, 'fulcrum', null, { shape: shapes.fulcrum });
  ball = this.matter.add.sprite(game.config.width * .34, game.config.height * .6, 'ball', null, { shape: shapes.ball });
  ball2 = this.matter.add.sprite(game.config.width * .87, game.config.height * .1, 'ball2', null, { shape: shapes.ball2 });
  pusher = this.matter.add.sprite(game.config.width * .97, game.config.height * .2, 'pusher', null, { shape: shapes.pusher }).setScale(.15);
  guy1 = this.matter.add.sprite(game.config.width * .03, game.config.height * .48, 'guy1', null, { shape: shapes.guy1 }).setScale(.6);
  guy2 = this.matter.add.sprite(game.config.width * .13, game.config.height * .78, 'guy2', null, { shape: shapes.guy2 }).setScale(.1);
  guy3 = this.matter.add.sprite(game.config.width * .5, game.config.height * .78, 'guy1', null, { shape: shapes.guy1 }).setScale(.6).setAngle(90);
  guy4 = this.matter.add.sprite(game.config.width * .65, game.config.height * .76, 'guy4', null, { shape: shapes.guy4 });

  var txt = this.make.text({
    x: game.config.width / 2,
    y: 30,
    text: 'WHO DIES FIRST?',
    origin: 0.5,
    style: {
      font: 'bold 40px Arial',
      fill: 'white',
      backgroundColor: '#D88535'
    },
  });

  this.anims.create({
    key: 'push',
    frames: this.anims.generateFrameNumbers('pusher', { start: 0, end: 16 }),
    frameRate: 10,
    repeat: 0
  });

  this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('guy2', { start: 1, end: 7 }),
    frameRate: 10,
    repeat: -1
  });

  guy2.anims.play('walk');

  this.input.on('pointerdown', function (pointer) {
    pusher.anims.play('push');
  }, this);

  this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
}
function update() {
  if (pusher.anims.isPlaying) {
    pusher.x -= .5;
  }
  guy2.x += .3;
}