class BaseClass{
    constructor(x,y,width,height){
        
        var options = {
            restitutuion : 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        push();
        //fill(30,154,237)
        //rectMode(CENTER);
        pop();
    }
}