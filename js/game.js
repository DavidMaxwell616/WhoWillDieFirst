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
      gravity: {
        y: 0,
      },
      debug: false
    },
  },
};

var game = new Phaser.Game(config);

function create() {
  this.cameras.main.setBackgroundColor("#A5D1FE");
  background = this.add.sprite(0, 0, "background");
  background.setOrigin(0);
  if (objectData == undefined) {
    objectData = this.cache.json.get('background');
  }
}
function update() {

}