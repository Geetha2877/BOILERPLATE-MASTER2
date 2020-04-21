class Box {
    constructor() {
        var options={
            restitution: 1.0
    }
        this.body = Bodies.rectangle(200,100,50,50,options);    
        world.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);

    }
    
};
