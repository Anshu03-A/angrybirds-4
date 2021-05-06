class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage('sprites/sling1.png');
        this.sling2=loadImage('sprites/sling2.png');
        this.sling3=loadImage('sprites/sling3.png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    



    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,80,40,140);
        image(this.sling2,175,80,40,80)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(71,32,19)
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
            line(pointA.x-35, pointA.y, pointB.x-8, pointB.y);
            image(this.sling3,pointA.x-37,pointA.y-15,15,30);
        }
    }   
}