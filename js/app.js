// Enemies the player must avoid
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 65;
    this.horiz = 101;
    this.boundary = this.horiz * 5;
    this.startPos = -this.horiz;
    this.speed = speed;
    this.height = 60;
    this.width = 90;
  };


// motion for enemy bugs
Enemy.prototype.update = function(dt) {

    if(this.x < this.boundary) {
      //move forward
      //increment x by speed * dt
      this.x += this.speed * dt;
    }
    else {
      //reset pos to start
      this.x = this.startPos;
    }

};

// Draws the bug on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//character object
class Hero {
  constructor() {
    this.sprite = 'images/char-pink-girl.png';
    this.horiz = 101;
    this.vert = 83;
    this.startX = this.horiz * 3;
    this.startY = (this.vert * 4) + 75;
    this.x = this.startX;
    this.y = this.startY;
    this.height = 73;
    this.width = 50;
	  this.won = false;
  }


  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //update function
  update () {
    for (let enemy of allEnemies) {
      //checks if there is a collision
      if (this.x < enemy.x +     enemy.width &&
          this.x + this.width >  enemy.x &&
          this.y < enemy.y +     enemy.height &&
          this.y + this.height > enemy.y) {
          //collision detected!
          this.reset();

      }
      }

	//check to see if the player won
	if (this.y <= 0) {
		this.won = true;
		 }
	}
  //end of update function

  //resets character back to starting position
  reset() {
    this.x = this.startX;
    this.y = this.startY;
  }
  //end of reset function

  handleInput(input) {
    switch(input) {
      case 'left' :
        if (this.x > 0) {
          this.x -= this.horiz;
        }
      break;
      case 'up' :
        if (this.y > 0) {
      this.y -= this.vert;
      }
      break;
      case 'right' :
      if (this.x < this.horiz * 4) {
        this.x += this.horiz;
      }

      break;
      case 'down' :
      if (this.y < this.vert * 4) {
    this.y += this.vert;
    }
      break;
    }
  }

  }

//instantiates player and enemy bugs
const player = new Hero();
const ladybug1 = new Enemy(-101, 0, 200);
const ladybug2 = new Enemy(-101, 83, 300);
const ladybug3 = new Enemy((-101*2.5), 83, 300);
const ladybug4 = new Enemy(-101, 160, 50);
const ladybug5 = new Enemy(-101*1.5, 0, 50);
const allEnemies = [];
allEnemies.push(ladybug1,ladybug2,ladybug3, ladybug4, ladybug5);

// This listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//function that toggles modal appearance
function toggleModal() {
//const modal = document.querySelector('.modal-bgd');
modal.classList.toggle("hide");
 console.log("modal has been toggled");
}
