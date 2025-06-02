function preload() {

  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.refresh();

  this.load.path = '../assets/images/';
  this.load.image('maxxdaddy', 'maxxdaddy.gif');
  this.load.image('background', 'background.png');
  this.load.path = '../assets/json/';
  this.load.json('background', 'background.json');

}