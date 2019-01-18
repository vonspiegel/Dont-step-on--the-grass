# Don't step the grass

## Description
Minigame that challenges your reflexes. The goal is simple: avoid stepping the grass or face the consequences! Jumping is your best friend.


## MVP (DOM - CANVAS)
CANVAS - Press the key to jump on time. If you lose all of your lives, the game is over.


## Backlog
Scenario - The grass obstacles will appear ahead randomly while the ground is scrolling right.

Jumper - Our hero will have one single movement: upward. Be careful with the gravity.

Levels - The more time you are able to avoid the grass, the faster the ground will move.

## Data structure
Main - to define functions to trigger and finish the game:
- Canvas to link the html file
- Game as instance of the game file
- startGame to initialize the game
- endGame to finish the game

Game - to link the player and obstacles files and control what is displaying:
- Instance of player
- Instance of obstacles
- callback the startGame
- callback the endGame
- callback of canvas

Player - to define the constructor of the jumper:
- Coordinates
- Img
- Size
- callback of canvas
- drawing function

Obstacle - to define de constructor of the obstacles:
- Coordinates
- Img
- Size
- Speed
- callback of canvas
- drawing function

Ground - to define the constructor of the ground
- y level
- callback of canvas
- drawing function?


## States and States Transitions
Definition of the different states and their transition (transition functions)

SplashScreen
- splashScreen
- addEventListener()

GameScreen
- gameScreen
- 

gameoverScreen
- addEventListener()


## Task
States
- Create html
  - canvas head and body
  - link preload
- Create main
  - function startGame()
    - 
  - addEventListener()
- Create game
  - function Game()
    - ctx
    - new Player
    - obstacles = []
    - function clearCanvas
    - function drawCanvas
    - function update
    - function createObstacle
  - Game.prototype.start
  - Game.protoype.stop
  - Game.prototype.pressKey
- Create player
  - function Player()
    - ctx
    - size
    - position
    - direction
    - speed
    - lives
  - Player.prototype.setDirection
  - Player.prototype.draw
  - Player.prototype.update
  - Player.prototype.checkCollideWithObstacle
  - Player.prototype.loseLife
  - Player.prototype.isDead
- Create obstacle
  - function Obstacle()
    - ctx
    - size
    - position
    - speed
  - Obstacle.prototype.draw
  - Obstacle.prototype.update
  - Obstacle.prototype.isOnScreen
- Create ground
  - function Ground()
    - ctx
    - position
  - Ground.protoype.draw



## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)