class Ball{
    constructor(x, y) {
        var options = {
            
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 80,80, options);
        this.width = 80;
        this.height = 80;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}