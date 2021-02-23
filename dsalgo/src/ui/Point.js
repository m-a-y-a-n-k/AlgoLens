export default class Point {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;
    this.size = 3;
    this.canvas = canvas;
    this.rect = this.canvas.getBoundingClientRect();
  }

  draw(event) {
    if (this.canvas) {
      this.drawCoordinates(
        event.clientX - this.rect.left,
        event.clientY - this.rect.top
      );
    }
  }

  drawCoordinates(x, y) {
    this.x = x;
    this.y = y;
    let ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#ff2626"; // Red color
    ctx.beginPath(); //Start path
    ctx.arc(x, y, this.size, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.font = "15px Arial";
    ctx.fillText(`( ${x} , ${y} ) `, x + 2 * this.size, y + 2 * this.size);
  }
}
