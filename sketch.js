let Me1;
let Font1, Font2;
let b1
let button, button1, button2, button3, button4, button5, button6;
let button7;
// var amp;
// var vol;
var song;

function preload(){
  Me1 = loadImage('images/Me a.png');
  // Font1 = loadFont('kindergarten.ttf');
  Font2 = loadFont('HYDiShengWuYouTiJ-2.ttf');

  b1 = loadImage("images/Upstairs.jpg");

  song = loadSound('walking-up-stairs-86304.mp3');
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
  song.play();
  song.setVolume(1);

}

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
}

function clearText1(){
  background(220);
  Me1.resize(100, 0);
  image(Me1, width/4, height/3);
  button1.hide();
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  text("You changed a lot...", width - width +100, height -100);
  text("你变化可真大···！", width - width +100, height -70);
  text("I can't recognise you now, just like ", width/2 +10, height -160);
  text("can't find the restaurant that you", width/2 +10, height -130);
  text("like the most when you were young.", width/2 +10, height -100);
  text("我现在已经认不出你了， ", width/2 +10, height -70);
  text("就像我找不到你小时候最爱的那家餐厅一样。", width/2 +10, height -40);

  // ? Changed click order the text won't appear
  button2  = createButton('next');
  button2.position(0, height -30);
  button2.mousePressed(clearLeft);

  button3  = createButton('next');
  button3.position(width/2 +3, height -30);
  button3.mousePressed(clearRight);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
}

function clearLeft(){
  button2.hide();
  fill(220);
  rect(0, 0, width/2, height);
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
  imageMode(CORNER);
  b1.resize(width, height);
  image(b1, 0, 0);
  // let step = createAudio('walking-up-stairs.mp3');
  // step.play();
  // amp = new p5.Amplitude();
  // vol = amp.getLevel();
}

// function mouseDoubleClicked(){
//   step.play();
// }