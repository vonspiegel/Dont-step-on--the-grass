# Don't step on the grass

## Description
Minigame that challenges your reflexes. The goal is simple: avoid stepping the grass or face the consequences! Jumping is your best friend.


## MVP (DOM - CANVAS)
CANVAS - Press the key to jump on time. If you lose all of your lives, the game is over.


## Backlog
Scenario - The grass obstacles will appear ahead randomly while the ground is scrolling right.

Jumper - Our hero will have one single movement: upward. Be careful with the gravity.

Levels - The more time you are able to avoid the grass, the faster the ground will move.

## Data structure
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
Game
- Write the loop
- Start the loop
- Add event listeners
- Create new Player
- Create one Obstacle
- Create more obstacles inside the loop
- Inside the loop, update and draw
- Clear canvas

Player
- Write player constructor with attributes
- Write, update and draw methods
- Write jump method with eventListener

Obstacle
- Write obstacle constructor with attributes
- Write, update and draw methods

Collisions
- If player collides with the obstacle, lose one life

Lives
- Update lives

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
https://github.com/vonspiegel/Dont-step-on-the-grass
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)