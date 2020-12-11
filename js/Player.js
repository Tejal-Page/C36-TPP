//THINGS TO DO
//GET THE COUNT OF NUMBER OF PLAYERS LOGGED IN FROM DATATBASE
//UPDATE THE PLAYERCOUNT ON THE DATABASE FROM OUR LOGIN
//UPDATE THE NAME OF PLAYER IN THE DATABASE AND GIVE AN INDEX NUMBER TO IT IN THE DATABASE
class Player {
  constructor(){}

  //READING THE PLAYERCOUNT FROM DATABASE
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  //UPDATAING THE DATABASE WITH OUR PLAYERCOUNT
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //UPDATAING THE DATABASE WITH OUR NAME AND INDEX NUMBER
  update(name){
    //CONCANATING THE WORD PLAYER WITH PLAYERCOUNT..THUS WE GET
    //PLAYER1, PLAYER2, PLAYER 3, PLAYER4...
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
