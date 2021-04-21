class Form {

    constructor() {
      this.input = createInput("").attribute("placeHolder", "Enter Your Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      background(bg);
      this.title.html("Unknown Game???");
      this.title.position(displayWidth/2 - 100, 0);
      this.title.style('color', 'White');
      this.title.style('fontSize', '35px');

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.button.style('background-color', 'lightgreen');
      this.button.style('border-radius', '20px')
      this.reset.position(displayWidth-100,20);
      this.reset.style('background-color', 'cyan');
      this.reset.style('border-radius', '25px')
      this.reset.style('width', '50px');
      this.reset.style('height', '50px');

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome " + player.name);
        this.greeting.style('color', 'White');
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref('/').update({
            players: null
        })
      });
    }
  }