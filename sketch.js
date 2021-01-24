

var database;
var gameStatefreezer=0;
var playercountfreezer=0;
var allplayer;
var form;
var game;
var player;

function setup(){
  createCanvas(1200,600);
 database = firebase.database();
game=new Game();
game.gatGameState();
game.start();

}


function draw(){
if(playercountfreezer==4){
 game.upadteGmaeState(1)
}
if(gameStatefreezer==1){
 game.play()
}

}
