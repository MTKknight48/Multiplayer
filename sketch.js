var database;
var gameState = 0;
var playerCount;
var form, game, player;
var allPlayers;
var car1, car2, car3, car4, cars;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
   if (playerCount == 4){
       game.update(1);
   } 
   if (gameState ==1){
       game.play();
   }
}


