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
  ground.setPosition(game.config.width / 2 + ground.centerOfMass.x, 500 + ground.centerOfMass.y);  // position (0,280)
  fulcrum = this.matter.add.sprite(game.config.width * .33, game.config.height * .7, 'fulcrum', null, { shape: objectData.shapes[0].fulcrum });
  ball = this.matter.add.sprite(game.config.width * .24, game.config.height * .6, 'ball', null, { shape: objectData.shapes[0].ball });
  this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
}
function update() {

}