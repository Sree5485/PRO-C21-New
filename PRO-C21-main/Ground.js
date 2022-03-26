class Ground {
  constructor(xInput, yInput, widthInput, heightInput) {
    this.x = xInput;
    this.y = yInput;
    this.width = widthInput;
    this.height = heightInput;

    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(
      xInput,
      yInput,
      widthInput,
      heightInput,
      options
    );

    World.add(userWorld, this.body);
  }
  display(){
    rect(this.xInput,this.yInput,this.widthInput,this.heightInput)
  }
}
