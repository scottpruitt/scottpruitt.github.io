//var drawableSnake = {color: "blue", pixels: snake};
//var drawableObjects = [drawableSnake];
//CHUNK.draw(drawableObjects);

//var apple = [{top: 3, left: 7}]
//var drawableApple = {color: "red", pixels: apple};
//var drawableObjects = [drawableApple];
//CHUNK.draw(drawableObjects)

var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}
var snake = [{ top: 0, left: 0, direction: "down"}];
drawSnake(snake);

//var moveSnake = function(snake) {
  //var oldSegment = snake[0];
  //var newSegment = { top: oldSegment.top, left: oldSegment.left +1};
  //var newSnake = [newSegment];
  //return newSnake;
//}

// statement = segement.direction == "down"
// expression = segment.direction
// value = "down"

var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left }
    case "up":
      return { top: segment.top - 1, left: segment.left }
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
}

var advanceGame = function() {
  snake = moveSnake(snake);
  drawSnake(snake);
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

CHUNK.executeNTimesPerSecond(advanceGame, 2);
CHUNK.onArrowKey(changeDirection);
