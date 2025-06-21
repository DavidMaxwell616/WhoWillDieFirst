function preload() {

  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.refresh();

  this.load.path = '../assets/images/';
  this.load.image('maxxdaddy', 'maxxdaddy.gif');
  this.load.image('groundImage', 'ground.png');
  this.load.image('ball', 'ball.png');
  this.load.image('ball2', 'ball2.png');
  this.load.image('guy1', 'guy 1.png');
  this.load.image('guy2', 'guy 2.png');
  this.load.image('guy4', 'guy 4.png');
  this.load.image('fulcrum', 'fulcrum.png');
  this.load.spritesheet('pusher', 'pusher.png', { frameWidth: 472, frameHeight: 600 });

  this.load.path = '../assets/json/';
  this.load.json('shapes', 'shapes.json');

}