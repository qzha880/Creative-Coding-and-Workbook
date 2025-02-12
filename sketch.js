let Me1, Me2;
let Font1, Font2;
let b1, b2, b3, b4, b5;
let button, button1, button2, button4, button5, button6;
let button7, button8, button9, button10, button11, button12, button13, button14;
let buttonA, buttonB;
var step, hi;
let selection1;

function preload(){
  Me1 = loadImage('images/Me a.png');
  Me2 = loadImage('images/Me b.png');
  // Font1 = loadFont('kindergarten.ttf');
  Font2 = loadFont('HYDiShengWuYouTiJ-2.ttf');

  b1 = loadImage("images/Dark path.jpg");
  b2 = loadImage("images/Upstairs.jpg");
  b3 = loadImage("images/Living room.jpg");
  b4 = loadImage("images/Bed room.jpg");
  b5 = loadImage("images/Bath room.jpg");

  
  step = loadSound('audios/walking-sound-effect-272246.mp3');
  hi = loadSound('audios/TEMPOREX - Hi.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  imageMode(CENTER);
  Me1.resize(100, 0);
  image(Me1, width/2, height/3);
  textSize(15);
  textFont(Font2);
  text("Hey! You are back!", width - width +10, height -100);
  text("嘿！你回来了！", width - width +10, height -70);
  // textFont(Font1);
  button = createButton('next');
  button.position(0, height -30);
  button.mousePressed(clearText);

  // selection1 = createSelect();
  // selection1.position(0, height -30);

  // selection1.option('');
  // selection1.option('Why not use an elevator?');
  // selection1.option('It is too tiring to climb up to the fifth floor.');
  // selection1.hide();
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
  // let x = selection1.selected();
  // if (x === 'Why not use an elevator?'){
  //   fill(220);
  //   noStroke();
  //   rect(0, height -150, width/2, height);
  //   selection1.hide();
  //   fill(0);
  //   text("Oh?......We almost there!", width - width +10, height -100);
  //   text("哦？······我们就快到了！", width - width +10, height -70);
  //   // button9 = createButton('next');
  //   // button9.position(0, height -30);
  //   // button9.mousePressed(whiteCanvas);
  //   // button9.hide();
  // } else if (x === 'It is too tiring to climb up to the fifth floor.'){
  //   fill(220);
  //   noStroke();
  //   rect(0, height -150, width/2, height);
  //   selection1.hide();
  //   fill(0);
  //   text("Haha that's why you used to wish that you could fly.", width - width +10, height -100);
  //   text("哈哈这就是为什么之前你希望自己会飞。", width - width +10, height -70);
  //   // button9 = createButton('next');
  //   // button9.position(0, height -30);
  //   // button9.mousePressed(whiteCanvas);
  //   // button9.hide();
  // } else if (x === ''){}
}

function clearText(){
  button.hide();
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  text("I've been waiting for you for years!", width - width +10, height -100);
  text("我等了你很多年！", width - width +10, height -70);
  button1 = createButton('next');
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
  text("You changed a lot...", width - width +10, height -100);
  text("你变化可真大···！", width - width +10, height -70);
  text("I can't recognise you now, just like ", width/2 +10, height -160);
  text("our hometown.", width/2 +10, height -130);
  text("我现在已经认不出你了，", width/2 +10, height -100);
  text("就像我已经认不出我们家乡一样。", width/2 +10, height -70);

  // ? Changed click order the text won't appear

  button2 = createButton('next');
  button2.position(0, height -30);
  button2.mousePressed(clearLeft);
  setTimeout(button3, 3000);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
}

function button3(){
  button3 = createButton('next');
  button3.position(width/2 +3, height -30);
  button3.mousePressed(clearRight);
}

function clearLeft(){
  button2.hide();
  fill(220);
  rect(0, 0, width/2 -3, height);
  text("Anyways, things don't change here.", width - width +10, height -100);
  text("没事，在这里什么都不会变。", width - width +10, height -70);
  button4 = createButton('next');
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
  text("Follow me! You're gonna love this place!", width - width +10, height -100);
  text("跟我来！你一定会爱上这里的！", width - width +10, height -70);
  button5 = createButton('next');
  button5.position(0, height -30);
  button5.mousePressed(blackCanvas);
}

function blackCanvas(){
  button5.hide();
  fill(0);
  noStroke();
  rect(0, 0, width/2, height);
  button6 = createButton('next');
  button6.position(0, height -30);
  button6.mousePressed(clearCanvas);
}

function clearCanvas(){
  button6.hide();
  background(220);
  button7 = createButton('next');
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
  setTimeout(splitCanvas, 4000);
}

function splitCanvas(){
  background(220);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
  noStroke();
  fill(0);
  // text("I've been waiting for you for years!", width - width +100, height -100);
  // text("我等了你很多年！", width - width +100, height -70);
  imageMode(CORNER);
  b2.resize(width/2, height -150);
  image(b2, 0, 0);
  text("This way.", width/2 +10, height -100);
  text("这边。", width/2 +10, height -70);
  button8  = createButton('next');
  button8.position(width/2 +3, height -30);
  button8.mousePressed(homePic);

  // button9 = createButton('next');
  // button9.position(0, height -31);
  // button9.mousePressed(whiteCanvas);

  buttonA = createButton('Why not use an elevator?');
  buttonA.position(0, height -81);
  buttonA.mousePressed(wrongAnswer);

  buttonB = createButton('It is too tiring to climb up to the fifth floor.');
  buttonB.position(0, height -61);
  buttonB.mousePressed(rightAnswer);

  // selection1 = createSelect();
  // selection1.position(0, height -30);

  // selection1.option('');
  // selection1.option('Why not use an elevator?');
  // selection1.option('It is too tiring to climb up to the fifth floor.');
}

function wrongAnswer(){
    fill(220);
    noStroke();
    rect(0, height -150, width/2, height);
    fill(0);
    text("Oh?......We almost there!", width - width +10, height -100);
    text("哦？······我们就快到了！", width - width +10, height -70);
    buttonA.hide();
    buttonB.hide();
    button9 = createButton('next');
    button9.position(0, height -30);
    button9.mousePressed(whiteCanvas);
}

function rightAnswer(){
  fill(220);
    noStroke();
    rect(0, height -150, width/2, height);
    fill(0);
    text("Haha that's why you used to wish that you could fly.", width - width +10, height -100);
    text("哈哈这就是为什么之前你希望自己会飞。", width - width +10, height -70);
    buttonA.hide();
    buttonB.hide();
    button9 = createButton('next');
    button9.position(0, height -30);
    button9.mousePressed(whiteCanvas);
}

function homePic(){
  imageMode(CORNER);
  b3.resize(width/2, height);
  image(b3, width/2, 0);
  button8.hide();
  button10 = createButton('next');
  button10.position(0, height -31);
  button10.mousePressed(walkIn);
  erase();
}

function whiteCanvas(){
  fill(255);
  noStroke();
  rect(0, 0, width/2, height);
  erase();
  button9.hide();
}

// function walkIn(){
//   imageMode(CORNER);
//   b4.resize(width/2, height/2);
//   image(b4, width/2, 0);
//   line(width/2, height/2, width, height);
//   stroke(0)
//   strokeWeight(3)
//   imageMode(CORNER);
//   b5.resize(width/2, height);
//   image(b5, width/2, height/2);
//   button10.hide();
//   button11 = createButton('next');
//   button11.position(width/2 +3, height -31);
//   button11.mousePressed(inBedroom);
//   button12 = createButton('look in the mirror');
//   button12.position(width/2 +3, height/2 -31);
//   button12.mousePressed(inBathroom);
// }

// function inBedroom(){
//   button11.hide();
//   button13 = createButton('next');
//   button13.position(width/2 +3, height -31);
//   button13.mousePressed(bedroomOne);
//   textSize(30);
//   text("I", width/2 +10, 100);
//   text("我", width/2 +10, 130);
//   text("miss", width/2 +200, 100);
//   text("念", width/2 +10, 130);
//   text("This", width/2 +10, 300);
//   text("此", width/2 +10, 330);
//   text("PLACES", width/2 +200, 300);
//   text("地", width/2 +10, 330);
//   buttonP1 = createButton('next');
//   buttonP1.position(width/2 +3, height -31);
//   buttonP1.mousePressed(bedroomOne);
//   buttonP2 = createButton('next');
//   buttonP2.position(width/2 +3, height -31);
//   buttonP2.mousePressed(bedroomOne);
//   buttonP3 = createButton('next');
//   buttonP3.position(width/2 +3, height -31);
//   buttonP3.mousePressed(bedroomOne);
//   buttonP4 = createButton('next');
//   buttonP4.position(width/2 +3, height -31);
//   buttonP4.mousePressed(bedroomOne);
// }

// function inBathroom(){
//   button12.hide();
//   button14 = createButton('next');
//   button14.position(width/2 +3, height/2 -31);
//   button14.mousePressed(bathroomOne);
// }