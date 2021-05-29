function isTouching(object1,object2){
  var pos=object2.body.position
  if (object1.x - pos.x < object2.width/2 + object1.width/2
    && pos.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - pos.y < object2.height/2 + object1.height/2
    && pos.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}