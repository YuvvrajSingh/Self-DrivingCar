class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

// Create and manage obstacles in your main.js file
const obstacles = [
  new Obstacle(200, 300, 30, 30),
  new Obstacle(400, 500, 40, 40),
  // Add more obstacles as needed
];
