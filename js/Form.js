/*HINGS TO DO
- CREATE TITLE HTML ELEMENT WITH H2 HEADER, POSITION IT
- CREATE INPUT AND POSITION
- CREATE BUTTON ELEMENT AND POSTION
- DEFINE THINGS THAT HAPPEN WHEN U PRESS THE MOUSE
    -HIDE BUTTON AND INPUT
    -TAKE THE NAME AND STORE IT IN VAFR NAME
    -INCREASE THE PLAYERCOUNT
    -CREATE, DISPALY AND POSTION THE GREETING ELEMENT
*/
class Form {
  constructor(){
    
  }

  display(){
    //CRETING 
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
