// Enemies our player must avoid
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

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //if enemy is not past boundary of game
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

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

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

  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //update function

  update () {
    for (let enemy of allEnemies) {
      //check if there is a collision
      // if (this.y === enemy.y && (enemy.x + 40 >=
      //     this.x && enemy.x - 40 <= this.xs)) {
      if (this.x < enemy.x +     enemy.width &&
          this.x + this.width >  enemy.x &&
          this.y < enemy.y +     enemy.height &&
          this.y + this.height > enemy.y) {
          //collision detected!
           this.reset();
      }
      //console.log(this.x, this.y);
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








const player = new Hero();
const ladybug1 = new Enemy(-101, 0, 200);
const ladybug2 = new Enemy(-101, 83, 300);
const ladybug3 = new Enemy((-101*2.5), 83, 300);
const ladybug4 = new Enemy(-101, 160, 50);
const allEnemies = [];
allEnemies.push(ladybug1,ladybug2,ladybug3, ladybug4);
//console.log(allEnemies);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
