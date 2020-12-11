//THINGS TO DO:
//GET THE STATE FROM DATATBASE
//UPDATE THE DATABASE WITH OUR STATE
//IF IN WAIT STATE, THEN CREATE PLAYER, UPDATE COUNT, CREATE FORM


class Game {
  constructor(){}
  
  //R4EADING STATE FROM DATABASE
  getState(){
    var gameStateRef  = database.ref('gameState');  //REFEREEING TO GAMESTATE VARIABLE IN DATABASE
    //LISTENING TO CHANGES IN THE DATABASE WRT TO GAMESTATE N UPDATING OUR GAMESTATE VARIABLE
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   //"value" is predefined, dont change the case. It takes value from JSON database and puts it into our program.
  }

  /*ANONYMOUS FUNCTION- 
  - IT HAS NO NAME
  - IT IS USED AS A CALL BACK FUNCTION
  - TOO MANY HTINGS TO DO WHEN DATA VALUE IS READ , SO YOU NEED TO PUT ALL THESE THINGS INTO A FUCNTION
  - IT CANNOT N=BE CALLED ANYWHERE ELSE
  */
  
  //UPDATE DATABSE AFTER OUR GAMESTATE VARIABLE IS CHANGED
  // "/" STANDS FOR FIRST/ROOT DIRECTORY
  //gameState: state, you are placing our value into JSON database.
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //START OF THE GAME- WAIT STATE
  start(){
    if(gameState === 0){
      //CREATE PLAYER AND UPDATE THE PLAYERCOUNT
      player = new Player();
      player.getCount();
      //GIVE THE FORM AFTER THE PLAYER NEW IS CREATED
      form = new Form()
      form.display();
      
      //getCOunt and display and user defined functions of Player class and form class
    }
  }
}
