let Me1, Me2;
let Font1, Font2;
let b1
let button, button1, button2, button3, button4, button5, button6;
let button7, button8;
var step, hi;

function preload(){
  Me1 = loadImage('images/Me a.png');
  Me2 = loadImage('images/Me b.png');
  // Font1 = loadFont('kindergarten.ttf');
  Font2 = loadFont('HYDiShengWuYouTiJ-2.ttf');

  b1 = loadImage("images/Upstairs.jpg");

  step = loadSound('audios/walking-up-stairs-86304.mp3');
  hi = loadSound('audios/TEMPOREX - Hi.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  imageMode(CENTER);
  Me1.resize(100, 0);
  image(Me1, width/2, height/3);
  textSize(25);
  textFont(Font2);
  text("Hey! You are back!", width - width +100, height -100);
  text("嘿！你回来了！", width - width +100, height -70);
  // textFont(Font1);
  button  = createButton('next');
  button.position(0, height -30);
  button.mousePressed(clearText);

  // step = loadSound('walking-up-stairs-86304.mp3');
  // setTimeout(music, 1000);

}
// function music(){
//   hi.play();
//   hi.setVolume(1);
// }
// function windowResized(){
//   resizeCanvas(windowWidth,windowHeight);
// }

function draw() {
}

function clearText(){
  button.hide();
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  text("I've been waiting for you for years!", width - width +100, height -100);
  text("我等了你很多年！", width - width +100, height -70);
  button1  = createButton('next');
  button1.position(0, height -30);
  button1.mousePressed(clearText1);
  hi.play();
  hi.setVolume(0.3);
}

function clearText1(){
  background(220);
  Me2.resize(200, 0);
  image(Me2, width/4, height/3);
  button1.hide();
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  text("You changed a lot...", width - width +100, height -100);
  text("你变化可真大···！", width - width +100, height -70);
  text("I can't recognise you now, just like ", width/2 +10, height -160);
  text("our hometown.", width/2 +10, height -130);
  text("我现在已经认不出你了，", width/2 +10, height -100);
  text("就像我已经认不出我们家乡一样。", width/2 +10, height -70);

  // ? Changed click order the text won't appear

  button2  = createButton('next');
  button2.position(0, height -30);
  button2.mousePressed(clearLeft);
  setTimeout(buttonThree, 3000);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
}

function buttonThree(){
  button3  = createButton('next');
  button3.position(width/2 +3, height -30);
  button3.mousePressed(clearRight);
}

function clearLeft(){
  button2.hide();
  fill(220);
  rect(0, 0, width/2 -3, height);
  text("Anyways, things don't change here.", width - width +100, height -100);
  text("没事，在这里什么都不会变。", width - width +100, height -70);
  button4  = createButton('next');
  button4.position(0, height -30);
  button4.mousePressed(clearLeft1);
}

function clearRight(){
  button3.hide();
  fill(220);
  noStroke();
  rect(width/2 +3, 0, width, height);
  fill(0);
  text("Everything is changing so fast even humanity.", width/2 +10, height -100);
  text("一切都变得太快了， 甚至是人类自身。", width/2 +10, height -70);
}

function clearLeft1(){
  button4.hide();
  fill(220);
  noStroke();
  rect(0, 0, width/2 -3, height);
  fill(0);
  text("Follow me! You're gonna love this place!", width - width +100, height -100);
  text("跟我来！你一定会爱上这里的！", width - width +100, height -70);
  button5  = createButton('next');
  button5.position(0, height -30);
  button5.mousePressed(blackCanvas);
}

function blackCanvas(){
  button5.hide();
  fill(0);
  noStroke();
  rect(0, 0, width/2, height);
  button6  = createButton('next');
  button6.position(0, height -30);
  button6.mousePressed(clearCanvas);
}

function clearCanvas(){
  button6.hide();
  background(220);
  button7  = createButton('next');
  button7.position(0, height -30);
  button7.mousePressed(buildingPic);
}

function buildingPic(){
  button7.hide();
  hi.stop();
  imageMode(CORNER);
  b1.resize(width, height);
  image(b1, 0, 0);
  step.play();
  step.setVolume(1);
  setTimeout(splitCanvas, 12000);
}

function splitCanvas(){
  background(220);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
  noStroke();
  fill(0);
  text("This way.", width/2 +10, height -100);
  text("这边。", width/2 +10, height -70);
  button8  = createButton('next');
  button8.position(0, height -30);
  button8.mousePressed(toBeContinued);
}

function toBeContinued(){
  button8.hide();
  background(0);
  fill(255);
  text("The journey is not over yet...", width/3, height/2);
}
