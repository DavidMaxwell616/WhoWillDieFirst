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
    objectData = this.cache.json.get('ground');
  }
  var cat = this.add.container(game.width / 2, game.height / 2);
  cat.add(this.add.sprite(0, 0, 'groundImage'));

  this.matter.add.gameObject(cat, { shape: objectData.ground, isStatic: true });


  //console.log(objectData.ground.fixtures[0].vertices);


  this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
}
function update() {

}