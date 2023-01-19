const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


const road = new Image()
road.src = "../images/road.png"


const car = new Image()
car.src = "../images/car.png"

const startingX = canvas.width/2 - 27.5
const startingY = canvas.height -120



class Obstacle {

  constructor(){

    this.x = Math.random() * 700;
    this.y = 0;
    this.width = 20 +Math.floor(Math.random()*350);
    this.height = 20;
   
  }

newPostition(){
  this.y++
}


  draw(){
    ctx.fillstyle = 'brown'
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
}









const player = {
  x: startingX,
  y: startingY,
 
  draw:function(){
    ctx.drawImage(car, this.x,this.y, 50,100)
  },

  moveLeft: function(){
  this.x = this.x-5
  },
  moveRight: function(){
  this.x = this.x+5
  },
  moveUp: function(){
    this.y = this.y-5
  },
  moveDown: function(){
    this.y = this.y + 5
  }
}



const obstaclesArray = []

function createObstacles(){

  let intervalID =  setInterval (()=>{
  obstaclesArray.push(new Obstacle)
},2000)
}







function updateCanvas(){
  ctx.clearRect(0,0,500,700)
  ctx.drawImage(road, 0,0,500,700)
  player.draw()

  for (let i=0;i<obstaclesArray.length; i++){
    obstaclesArray[i].newPostition()
    obstaclesArray[i].draw() //add .updateobstacles before .draw
    
  }

}


function animationLoop(){
  let animationId = setInterval(()=>{
    updateCanvas()
  },16)
}









function startGame() {
  console.log('starting')
  ctx.drawImage(road, 0,0,500,700)
  player.draw()
  createObstacles()
  animationLoop()
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 38:
        player.moveUp();
        console.log('up', player);
        break;
      case 40:
        player.moveDown();
        console.log('down', player);
        break;
      case 37:
        player.moveLeft();
        console.log('left', player);
        break;
      case 39:
        player.moveRight();
        console.log('right', player);
        break;
    }
    // updateCanvas();
  });
  



}


