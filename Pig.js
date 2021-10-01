class Pig extends BaseClass {

  flag = 0;
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
     if(this.flag==0){
      this.flag = 1;
      alert(score)
     }
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
      if(score>=100)
      {
        text("you won 100 ponts,",100,100);
        this.image= loadImage("sprites/chest.png");
        image(this.image,this.body.position.x,this.body.position.y, 50, 50);
      }
     
    }
  }



};