class rope{

    constructor(bodyA,pointB){
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 10
    }
         this.bodyA = bodyA;
         this.pointB = pointB; 
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
    }
    fly(){
       this.rope.bodyA = null;
    }
 
    attach(){
       this.rope.bodyA = hero1.body;   
    }
      
    display(){
     if(this.rope.bodyA){
       var pointA = this.rope.bodyA.position;
       var pointB = this.pointB;
      push();
      strokeWeight(4);
      fill("white");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
    }
 }
 }