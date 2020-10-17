var database 
var drawing = []
var currentPath = []

function setup(){
 canvas = createCanvas(600,600)
 canvas.mousePressed(startPath)
 //canvas.parent('canvasContainer')

 //var saveButton = select('#saveButton')
 //saveButton.mousePressed(saveDrawing)
 //canvas.mousePressed(endPath)
 database = firebase.database()
}

function startPath(){
  currentPath = []
  drawing.push(currentPath)
}

//function endPath(){
 // drawing.push(currentPath)
//}

function draw(){
  background(0);
   
  if(mouseIsPressed){
   var point = {
    x : mouseX,
    y : mouseY
   }

   currentPath.push(point)
  }

  
  stroke(255)
  strokeWeight(8)
  noFill()
  for(var i = 0 ; i < drawing.length ; i++){
    var path = drawing[i]
    beginShape();
    for(var j = 0 ; j < path.length ; j++){
      vertex(path[j].x,path[j].y)
    }
    endShape();
  }
 

}

function saveDrawing(){
  var ref = database.ref('drawings')
  var data = {
     name : "Kshitij",
     drawing : drawing
  }
  ref.push(data)
}
