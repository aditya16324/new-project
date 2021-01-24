class Form{

constructor(){
    
this.heading=createElement("h1")
this.inputbox=createInput("name")
this.aditya=createButton("play")
this.greting=createElement("h2")



}
displayer(){
this.heading.html("Car Racing Game")
this.heading.position(200,50)
this.inputbox.position(600,100)
this.aditya.position(400,150)


this.aditya.mousePressed( ()=>{
    this.inputbox.hide()
    this.heading.hide()
    this.aditya.hide()
    player.name=this.inputbox.value()
    playercountfreezer=playercountfreezer+1
    player.index=playercountfreezer
    player.updatePlayerInfo()
    player.updatePlayerCount(playercountfreezer)
    
    
    this.greting.html("hello  "  +    player.name)
this.greting.position(600,300)
    
}
    
)







}

}
