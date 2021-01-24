class Player{


    constructor(){
this. name=null
this.index=null
this.distance=0


    }
  updatePlayerCount(bowl1){
    database.ref('/').update({
   playerCount: bowl1
    });
    
  }

  getPlayerCount(){
    var goDataBase  = database.ref("playerCount");
    goDataBase.on("value",function(data){
      playercountfreezer= data.val();
    })
   
  } 
  
  updatePlayerInfo(){
var rishab="players/player"+this.index;
database.ref(rishab).set({
  name:this.name,
  distance:this.distance

})

  }

  getPlayerInfo(){
    var goDataBases  = database.ref("players");
    goDataBases.on("value",function(data){
      allplayer= data.val();
    })
   
  } 



}