class Game {

    upadteGmaeState(bowl1){
        database.ref('/').update({
       gameState : bowl1
        });
        
      }





      gatGameState(){
        var goDataBase  = database.ref("gameState");
        goDataBase.on("value",function(data){
        gameStatefreezer = data.val();
        })
       
      }


      async start(){
        if(gameStatefreezer === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playercountfreezer = playerCountRef.val();
            player.getPlayerCount();
          }
          form = new Form()
          form.displayer();
        }}

    play(){
     if(keyIsDown(UP_ARROW)){
      player.distance+=10
     player.updatePlayerInfo()

}

    }
    
  
}