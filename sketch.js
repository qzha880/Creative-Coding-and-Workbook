let Me1, Me2;
let Font1, Font2, Font3, Font4;
let b1, b2, b3, b4, b5, b6;
let br1, br2, br3, br4;
let mirror;
let c0, c1, c2, c3;
let phone;
let notification;
let button, button1, button2, button3, button4, button5, button6;
let button7, button8, button9, button10, button11, button12, button13;
let buttonA, buttonB;
let buttonP1, buttonP2, buttonP3, buttonP4;
let button14, Button15, button15, button16, button17;
let button18, button19, button20, button21, button22, button23;
let button24, button25, button26, button27;
let button01, button02;
var step, hi, dream, alarm, running, brakeGlass, crack, smallCrack, earthquake1, earthquake2, iphone, bgm, massage, off;

function preload(){
  Me1 = loadImage('images/Me a.png');
  Me2 = loadImage('images/Me b.png');
  Font1 = loadFont('October Wish .otf');
  Font2 = loadFont('HYDiShengWuYouTiJ-2.ttf');
  Font3 = loadFont('Roboto-Regular.ttf');
  Font4 = loadFont('Y-B008YeZiGongChangDanDanHei-2.ttf');

  b1 = loadImage("images/Dark path.jpg");
  b2 = loadImage("images/Upstairs.jpg");
  b3 = loadImage("images/Living room.jpg");
  b4 = loadImage("images/Bed room.jpg");
  b5 = loadImage("images/Bath room.jpg");
  b6 = loadImage("images/Wrong pic.jpg");

  br1 = loadImage("images/Bedroom1.jpg");
  br2 = loadImage("images/Bedroom2.jpg");
  br3 = loadImage("images/Bedroom3.jpg");
  br4 = loadImage("images/Bedroom4.jpg");

  mirror = loadImage("images/Mirror.jpg");

  c0 = loadImage("images/Pink school.jpg");
  c1 = loadImage("images/Plant class.jpg");
  c2 = loadImage("images/Computer room.jpg");
  c3 = loadImage("images/Class party.jpg");

  phone = loadImage("images/istockphoto-483422126-612x612.jpg");
  notification = loadImage("images/51548daead1c041a1215bec3d54f5b9c.jpg")

  step = loadSound('audios/walking-sound-effect-272246.mp3');
  hi = loadSound('audios/TEMPOREX - Hi.mp3');
  dream = loadSound('audios/Dream.mp3');
  alarm = loadSound('audios/clock-alarm-8761.mp3');
  running = loadSound('audios/running-on-concrete-268478.mp3');
  brakeGlass = loadSound('audios/glass-broken-43626.mp3');
  crack = loadSound('audios/rocks-6129.mp3');
  smallCrack = loadSound('audios/cracking-bones-173109.mp3');
  earthquake1 = loadSound('audios/earth-rumble-6953.mp3');
  earthquake2 = loadSound('audios/052256_cracking-earthquake-cracking-soil-cracking-stone-86770.mp3');
  iphone = loadSound('audios/iphone_alarm.mp3');
  bgm = loadSound('audios/新录音 65.mp3');
  massage = loadSound('audios/iphone-sms-tone-original-mp4-5732.mp3');
  off = loadSound('audios/新录音 66.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  imageMode(CENTER);
  Me1.filter(BLUR,6);
  Me1.filter(POSTERIZE);
  Me1.resize(100, 0);
  image(Me1, windowWidth/2, windowHeight/3);
  textSize(18);
  textFont(Font2);
  text("Hey! You are back!", windowWidth - windowWidth +10, windowHeight -100);
  text("嘿！你回来了！", width - width +10, height -70);
  button = createButton('next');
  button.position(0, height -30);
  button.mousePressed(clearText);

  // pixelDensity(1);
  // webCam = createCapture(VIDEO);
  // webCam.size(width/scale, height/scale);
  // webCam.hide();

  // for (x = 0; x < 200; x++){
  //   rx = random(15, width - 15);
  //   ry = random(15, height - 15);
  //   lineSystem1[x] = new horizontalLine(rx, ry);
  // }

  // for (x = 0; x < 200; x++){
  //   rx = random(15, width - 15);
  //   ry = random(15, height - 15);
  //   lineSystem2[x] = new verticalLine(rx, ry);
  // }
}

function draw() {
  // webCam.loadPixels();

  // for (x = 0; x < lineSystem1.length; x++){
  //   lineSystem1[x].move();
  //   lineSystem1[x].show();
  //   lineSystem1[x].checkEdges();
  // }

  // for (x = 0; x < lineSystem2.length; x++){
  //   lineSystem2[x].move();
  //   lineSystem2[x].show();
  //   lineSystem2[x].checkEdges();
  // }
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
  Me2.filter(BLUR, 6);
  Me2.filter(POSTERIZE);
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

  button2 = createButton('next');
  button2.position(0, height -30);
  button2.mousePressed(clearLeft);
  button3 = createButton('next');
  button3.position(width/2 +3, height -30);
  button3.mousePressed(clearRight);
  stroke(0);
  strokeWeight(5);
  line(windowWidth/2, 0, windowWidth/2, height);
}

function clearLeft(){
  button2.hide();
  fill(220);
  noStroke();
  rect(0, height -150, width/2 -3, height);
  fill(0);
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
  rect(0, height -150, width/2 -3, height);
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
  button3.hide();
  hi.stop();
  imageMode(CORNER);
  b1.filter(POSTERIZE);
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
  imageMode(CORNER);
  b2.filter(POSTERIZE);
  b2.resize(width/2, height -150);
  image(b2, 0, 0);
  text("This way.", width/2 +10, height -100);
  text("这边。", width/2 +10, height -70);
  button8  = createButton('next');
  button8.position(width/2 +3, height -30);
  button8.mousePressed(homePic);

  buttonA = createButton('Why not use an elevator?');
  buttonA.position(0, height -81);
  buttonA.mousePressed(wrongAnswer);

  buttonB = createButton('It is too tiring to climb up to the fifth floor.');
  buttonB.position(0, height -61);
  buttonB.mousePressed(rightAnswer);
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
  smallCrack.play();
  smallCrack.setVolume(0.5);
  setTimeout(smallCrackStop, 3000);
}

function smallCrackStop(){
  smallCrack.stop();
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
  b3.filter(POSTERIZE, 5);
  b3.resize(width/2, height);
  image(b3, width/2, 0);
  button8.hide();
  button10 = createButton('next');
  button10.position(width/2 +3, height -31);
  button10.mousePressed(walkIn);
  dream.play();
  dream.setVolume(0.3);
}

function whiteCanvas(){
  fill(255);
  noStroke();
  rect(0, 0, width/2, height);
  button9.hide();
}

function walkIn(){
  imageMode(CORNER);
  b4.filter(POSTERIZE, 5);
  b4.resize(width/2, height/2);
  image(b4, width/2, 0);
  line(width/2, height/2, width, height);
  stroke(0)
  strokeWeight(3)
  imageMode(CORNER);
  b5.filter(POSTERIZE, 7);
  b5.resize(width/2, height);
  image(b5, width/2, height/2);
  button10.hide();
  button11 = createButton('next');
  button11.position(width/2 +3, height/2 -31);
  button11.mousePressed(inBedroom);
  button12 = createButton('next');
  button12.position(width/2 +3, height -31);
  button12.mousePressed(inBathroom);
}

function inBedroom(){
  button11.hide();
  noStroke();
  fill(225);
  rect(width/2, 0, width, height/2);
  line(width/2 + 150, 0, width/2 + 150, height/2);
  line(width/2, height/2 - 150, width, height/2 - 150);
  textSize(30);
  textFont(Font2);
  fill(0);
  text("I", width/2 +10, 100);
  text("我", width/2 +10, 130);
  text("miss", width/2 + width/4, 100);
  text("念", width/2 + width/4, 130);
  text("This", width/2 +10, 300);
  text("此", width/2 +10, 330);
  text("PLACES", width/2 + width/4, 300);
  text("地", width/2 + width/4, 330);
  buttonP1 = createButton('1');
  buttonP1.position(width/2 +10, 130);
  buttonP1.mousePressed(bedroomOne);
  buttonP2 = createButton('2');
  buttonP2.position(width/2 + width/4, 130);
  buttonP2.mousePressed(bedroomTwo);
  buttonP3 = createButton('3');
  buttonP3.position(width/2 +10, 330);
  buttonP3.mousePressed(bedroomThree);
  buttonP4 = createButton('4');
  buttonP4.position(width/2 + width/4, 330);
  buttonP4.mousePressed(bedroomFour);
}

function inBathroom(){
  button12.hide();
  imageMode(CORNER);
  mirror.filter(BLUR, 2);
  mirror.resize(width/2, height/2 - 50);
  image(mirror, width/2, height/2);
  noStroke();
  fill(255);
  rect(width/2, height -55, width, height);
  Button15 = createButton('look in the mirror');
  Button15.position(width/2, height -30);
  Button15.mousePressed(noMirror);
  // setTimeout(noMirror, 1000)
  // pixelDensity(10);
  // webCam = createCapture(VIDEO);
  // webCam.size(200, 200);
  // webCam.filter(INVERT);
  // webCam.filter(BLUR);
  // setTimeout(noMirror, 5000);

  // webCam.hide();
  // image(webCam, 0, 0);

//   webCam = createCapture(VIDEO);
//   webCam.size(width/scale, height/scale);
//   webCam.hide();

//   for (x = 0; x < 200; x++){
//     rx = random(15, width - 15);
//     ry = random(15, height - 15);
//     lineSystem1[x] = new horizontalLine(rx, ry);
//   }

//   for (x = 0; x < 200; x++){
//     rx = random(15, width - 15);
//     ry = random(15, height - 15);
//     lineSystem2[x] = new verticalLine(rx, ry);
//   }

//   webCam.loadPixels();

//   for (x = 0; x < lineSystem1.length; x++){
//     lineSystem1[x].move();
//     lineSystem1[x].show();
//     lineSystem1[x].checkEdges();
//   }

//   for (x = 0; x < lineSystem2.length; x++){
//     lineSystem2[x].move();
//     lineSystem2[x].show();
//     lineSystem2[x].checkEdges();
//   }
//   // button13 = createButton('next');
//   // button13.position(width/2 +3, height/2 -31);
//   // button13.mousePressed(bathroomOne);
// }

// class horizontalLine{

//   constructor(x, y){
//     this.x = x;
//     this.y = y;

//   }

//   move(){
//     this.x = this.x + random (-8, 8);
//     this.y = this.y + random (-8, 8);
//   }

//   show(){
//     let pX = this.x / scale;
//     let pY = this.y / scale;
//     let pixelColour = webCam.get(pX, pY);
//     fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
//     noStroke();
//     rect(width-this.x, this.y, width/10, 1);
//   }

//   checkEdges(){
//     if(this.x < 15){
//       this.x = 15;
//     } else if (this.x > width - 15){
//       this.x = width - 15;
//     }
//     if(this.y < 15){
//       this.y = 15;
//     } else if (this.y > height - 15){
//       this.y = height - 15;
//     }
//   }
// }

// class verticalLine{

//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//   }

//   move(){
//     this.x = this.x + random (-8, 8);
//     this.y = this.y + random (-8, 8);
//   }

//   show(){
//     let pX = this.x / scale;
//     let pY = this.y / scale;
//     let pixelColour = webCam.get(pX, pY);
//     fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
//     noStroke();
//     rect(width-this.x, this.y, 1, height/10);
//   }

//   checkEdges(){
//     if(this.x < 15){
//       this.x = 15;
//     } else if (this.x > width - 15){
//       this.x = width - 15;
//     }
//     if(this.y < 15){
//       this.y = 15;
//     } else if (this.y > height - 15){
//       this.y = height - 15;
//     }
//   }
}

function noMirror(){
  Button15.hide();
  textFont(Font1);
  fill(0);
  textSize(18);
  text("(* ?... I can't see myself...)", width/2 +10, height -35);
  // button15 = createButton('next');
  // button15.position(width/2, height -30);
  // button15.mousePressed(bathroomOne);
  setTimeout(alarmStart, 3000);
}

function bedroomOne(){
  buttonP1.hide();
  imageMode(CORNER);
  br1.filter(POSTERIZE, 7);
  br1.resize(width/4, height/4);
  image(br1, width/2, 0);
}

function bedroomTwo(){
  buttonP2.hide();
  imageMode(CORNER);
  br2.filter(POSTERIZE, 7);
  br2.resize(width/4, height/4);
  image(br2, width/2 + width/4, 0);
}

function bedroomThree(){
  buttonP3.hide();
  imageMode(CORNER);
  br3.filter(POSTERIZE, 7);
  br3.resize(width/4, height/4);
  image(br3, width/2, height/4);
}

function bedroomFour(){
  buttonP4.hide();
  imageMode(CORNER);
  br4.filter(POSTERIZE, 7);
  br4.resize(width/4, height/4);
  image(br4, width/2 + width/4, height/4);
  setTimeout(bedroomOver, 1000)
}

// function bathroomOne(){
//   button15.hide();
//   noStroke();
//   fill(0);
//   rect(width/2, height/2, width, height);
//   setTimeout(alarmStart, 1500);
// }

function bedroomOver(){
  button14 = createButton('next');
  button14.position(width/2 + width/4, height/4);
  button14.mousePressed(bedroomClean);
}

function bedroomClean(){
  button14.hide();
  noStroke();
  fill(0);
  rect(width/2, 0, width, height/2);
}

function alarmStart(){
  noStroke();
  fill(0);
  rect(width/2, height/2, width, height);
  dream.stop();
  alarm.play();
  alarm.setVolume(1);
  setTimeout(lateToSchool, 3000);
}

function lateToSchool(){
  alarm.stop();
  button16 = createButton('next');
  button16.position(width/2, height -30);
  button16.mousePressed(goFirst);
  fill(255);
  textFont(Font2);
  textSize(18);
  text("OMG! We gonna be late to the school!", width/2 +10, height -100);
  text("天呐！我们上学要迟到了！", width/2 +10, height -70);
}

function goFirst(){
  button16.hide();
  noStroke();
  fill(0);
  rect(width/2, height -150, width, height);
  fill(255);
  text("You go first, I'll pack up and come find you.", width/2 +10, height -100);
  text("你先走吧，我收拾一下就找你。", width/2 +10, height -70);
  button15 = createButton('leave home');
  button15.position(width/2, height -30);
  button15.mousePressed(packUp);
}

function packUp(){
  button15.hide();
  noStroke();
  fill(0);
  rect(width/2, height -150, width, height);
  brakeGlass.play();
  brakeGlass.setVolume(0.3);
  setTimeout(whatSound, 3000);
}

function whatSound(){
  noStroke();
  fill(0);
  rect(width/2, height -150, width, height);
  textSize(18);
  textFont(Font1);
  fill(255);
  text("(* What was that sound?)", width/2 +10, height -100);
  button17 = createButton('go to school');
  button17.position(width/2, height -30);
  button17.mousePressed(leaveRoom);
}

// function hurryUp(){
//   button16.hide();
//   noStroke();
//   fill(0);
//   rect(width/2, height -150, width, height);
//   fill(255);
//   text("Hurry up!", width/2 +10, height -100);
//   text("快点！", width/2 +10, height -70);
//   button17 = createButton('go to school');
//   button17.position(width/2, height -30);
//   button17.mousePressed(leaveRoom);
// }

function leaveRoom(){
  button17.hide();
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  button18 = createButton('next');
  button18.position(0, height -30);
  button18.mousePressed(wayToSchool);
  buttonA.hide();
  buttonB.hide();
  button9.hide();
  button11.hide();
  buttonP1.hide();
  buttonP2.hide();
  buttonP3.hide();
  buttonP4.hide();
  button14.hide();
}

function wayToSchool(){
  button18.hide();
  b6.filter(INVERT);
  imageMode(CORNER);
  b6.resize(width, height);
  image(b6, 0, 0);
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  textFont(Font2);
  textSize(18);
  text("Hurry up!", 10, height -100);
  text("快点！", 10, height -70);
  running.play();
  running.setVolume(1);
  setTimeout(stopRunning, 5000);
}

function stopRunning(){
  running.stop();
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  button19 = createButton('next');
  button19.position(0, height -30);
  button19.mousePressed(atSchool);
}

function atSchool(){
  button19.hide();
  bgm.play();
  bgm.setVolume(0.9);
  c0.filter(POSTERIZE, 5);
  imageMode(CORNER);
  c0.resize(width, height);
  image(c0, 0, 0);
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  textSize(18);
  text("We arrived on time!", width - width +10, height -100);
  text("我们准时到了！", width - width +10, height -70);
  button20 = createButton('next');
  button20.position(0, height -30);
  button20.mousePressed(inSchool);
}

function inSchool(){
  button20.hide();
  c1.filter(POSTERIZE, 5);
  imageMode(CORNER);
  c1.resize(width/2, height);
  image(c1, 0, 0);
  c2.filter(POSTERIZE, 5);
  imageMode(CORNER);
  c2.resize(width/2, height);
  image(c2, width/2, 0);
  setTimeout(class1, 1000);

  button22 = createButton('next');
  button22.position(width/2, height -30);
  button22.mousePressed(class2);
}

function class1(){
  imageMode(CORNER);
  c3.filter(POSTERIZE, 5);
  c3.resize(width/2, height/2 + height/5);
  image(c3, 0, 0);
  fill(220);
  noStroke();
  rect(0, height/2 + height/5, width/2, height);
  fill(0);
  textSize(18);
  text("Seems like we're having a class party!", width - width +10, height -100);
  text("看起来我们好像在举行班级派对！", width - width +10, height -70);
  button21 = createButton('What was that flash just now?');
  button21.position(0, height -30);
  button21.mousePressed(question1);
}

function class2(){
  button22.hide();
  imageMode(CORNER);
  c2.filter(POSTERIZE, 5);
  c2.resize(width/2, height/2);
  image(c2, width/2, 0);
  fill(220);
  noStroke();
  rect(width/2, height/2, width, height);
  button24 = createButton('next');
  button24.position(width/2, height/2 -30);
  button24.mousePressed(computerClass);
  button25 = createButton('......');
  button25.position(width/2, height -30);
  button25.mousePressed(sayNothing);
}

function question1(){
  button21.hide();
  bgm.setVolume(0.7);
  fill(220);
  noStroke();
  rect(0, height/2, width/2, height);
  fill(0);
  text("I didn't see any, maybe you just hallucinated.", width - width +10, height -100);
  text("我没看到啊，你可能刚刚看走眼了吧。", width - width +10, height -70);
  crack.play();
  crack.setVolume(0.5);
  button23 = createButton('next');
  button23.position(0, height -30);
  button23.mousePressed(afterCrack);
}

function afterCrack(){
  button23.hide();
  fill(0);
  noStroke();
  rect(0, 0, width/2, height);
}

function computerClass(){
  button24.hide();
  fill(220);
  noStroke();
  rect(width/2, height/2 -100, width, height/2);
  textSize(18);
  textFont(Font2);
  fill(0);
  text("This is our computer class.", width/2 +10, height/2 -60);
  text("这是我们信息教室。", width/2 +10, height/2 -30);
  button26 = createButton('next');
  button26.position(width/2, height/2 -30);
  button26.mousePressed(twoParts);
}

function sayNothing(){
  button25.hide();
  textSize(18);
  textFont(Font1);
  fill(0);
  text("(* You looked around)", width/2 +10, height -100);
  button27 = createButton('ask');
  button27.position(width/2, height -30);
  button27.mousePressed(question2);
}

function twoParts(){
  button26.hide();
  fill(0);
  noStroke();
  rect(width/2, 0, width, height/2);
}

function question2(){
  button27.hide();
  fill(220);
  noStroke();
  rect(width/2, height/2, width, height);
  fill(0);
  text("Why is there no one here? Even on the way we passed.", width/2 +10, height -100);
  setTimeout(theAnswer,4000);
  setTimeout(earthquakeStart, 2500);
  setTimeout(blackScreen, 2000);
}

function blackScreen(){
  button26.hide();
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  bgm.setVolume(0.6);
}

function earthquakeStart(){
  bgm.setVolume(0.4);
  earthquake1.play();
  earthquake1.setVolume(0.7);
  setTimeout(earthquakeSecond, 4000);
}

function earthquakeSecond(){
  bgm.setVolume(0.2);
  earthquake1.stop();
  earthquake2.play();
  earthquake2.setVolume(1);
}

function theAnswer(){
  textSize(20);
  textFont(Font2);
  fill(255);
  text("......", width - width +10, height -100);
  text("······", width - width +10, height -70);
  setTimeout(willYouBeBack, 4000);
}

function willYouBeBack(){
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  text("Will you be back?", width - width +10, height -100);
  text("你还会回来吗？", width - width +10, height -70);
  setTimeout(realLifeAlarm, 5000);
}

function realLifeAlarm(){
  earthquake2.stop();
  bgm.stop();
  iphone.play();
  iphone.setVolume(1);
  button01 = createButton('turn off alarm');
  button01.position(0, height -30);
  button01.mousePressed(turnOff);
}

function turnOff(){
  imageMode(CORNER);
  phone.resize(width, height);
  image(phone, 0, 0);
  button01.hide();
  iphone.stop();
  setTimeout(getMessage, 3000);
}

function getMessage(){
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  imageMode(CORNER);
  notification.resize(0, height);
  image(notification, 0, 0);
  massage.play();
  massage.setVolume(1);
  fill(0);
  textSize(22);
  textFont(Font3);
  text("Unknown: I know you're not her, but it's still nice to meet you.", 100, height/2 + 50);
  textSize(22);
  textFont(Font4);
  text("我知道你不是她，但还是很高兴能认识你。", 100, height/2 + 100);
  button02 = createButton('turn off the phone');
  button02.position(0, height -30);
  button02.mousePressed(turnOffPhone);
}

function turnOffPhone(){
  button02.hide();
  off.play();
  off.setVolume(1);
  noStroke();
  fill(0);
  rect(0, 0, width, height);
  fill(255);
  textSize(16);
  textFont(Font2);
  text("WendyZhang", width -200, height -100);
}