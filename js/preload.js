function preload() {

  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.refresh();

  this.load.path = '../assets/images/';
  this.load.image('maxxdaddy', 'maxxdaddy.gif');
  this.load.image('groundImage', 'ground.png');
  this.load.path = '../assets/json/';
  this.load.json('ground', 'background2.json');

}