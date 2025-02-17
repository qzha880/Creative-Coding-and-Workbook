# Creative-Coding-and-Workbook
Creative Coding and Workbook

## Plans for the project
Create an interactive computational artwork based on a conversation between a person and the user. The background is in China, the person in the artwork will introduce the places while talking to the user. 
* Glitches may include
* Try to separate the dialogue in different branches
* Have (manipulated) images and sounds
* Add fonts
* Different ending / open ending

## Coding process
<img width="1440" alt="截屏2025-02-07 04 41 52" src="https://github.com/user-attachments/assets/6bad2ecb-2991-4dfc-9896-9467f5f758d6" />

I added fonts by following the workshop 6 video. 
* I used fonts that looks like it was hand written by a kid to make it suit the style of my work.
(since the conversation is between a kid and the user)
* Also I dicided to make the users part of the conversation using a different font.
* font webs: https://www.fonts.net.cn/fonts-zh/tag-katong2-1.html, https://www.dafont.com/theme.php?cat=201&page=12
I added the Chinese texts as well, since the story background is in China.
I create a function to clear the canvas and prepare for the next step
* Used rect to cover the area that I want to make blank
  ```
  fill(220);
  noStroke();
  rect(0, height -150, width, height);
  ```
* Hide the button ` button.hide(); ` - hide the old button and create a new one to continue the next step.
* I learnt to use `var` to add sounds and musics to my sketch (http://wiki.iad.zhdk.ch/PB/2554331315/p5.js+Variables)
* I noticed that sometimes some of the buttons has to be pressed in a certain order - I used setTimeout function to make sure they are in the right order. ` setTimeout(button3, 3000);`
```
function button3(){
  button3 = createButton('next');
  button3.position(width/2 +3, height -30);
  button3.mousePressed(clearRight);
}
```
Added audio to the sketch (How to add music to the sketch: https://www.youtube.com/watch?v=Pn1g1wjxl_0)
* audio web: https://pixabay.com/sound-effects/search/walking-up-stairs/
I made some of the text shorter

I tried to add selections ( but the selection result did not appear, only the selection buttons appeared) 
* I went back to my repository 5 and figured oout that I need to write the code in the setup function and the draw function at first, then I can use it in the defined functions.

I wanted to add a mirror in my work. ` let webCam; `
```
pixelDensity(10);
webCam = createCapture(VIDEO);
webCam.size(200, 200);
```

I tried to give the mirror some filter. 
```
webCam.filter(INVERT);
webCam.filter(BLUR);
```

I also tried to adjust the pixels of the mirror image. 
```
webCam.hide();
image(webCam, 0, 0);
```

### Problems met
<img width="1440" alt="截屏2025-02-07 05 20 09" src="https://github.com/user-attachments/assets/802b4eb0-cabe-4700-948b-ef29f89ac5f1" />

If I change the order of clicking the button, the text will not come up 
* The text has the same colour as the background due to the order change - write the code for the text colour again to solve the problem ` fill(0); `

<img width="1440" alt="截屏2025-02-07 10 50 23" src="https://github.com/user-attachments/assets/3bddf0e6-954b-4f9e-8eed-646b608de2e5" />

I cannot resize the canvas by changing the window size. `resizeCanvas(windowWidth, windowHeight);`
* Because once the canvas has been resized, all the images and texts will be covered by the new canvas. (since the images and the texts are not in the draw function)


I noticed that when I was working with the audio, I need to wait until the sound stop playing while I testing my code, otherwise there might be some issue such as no sounds or sounds played at the wrong time in the next code test. 

I found out that the audio cannot be placed in the draw function - the sound will never stop and it will be "distorted". 

<img width="1247" alt="截屏2025-02-10 16 04 21" src="https://github.com/user-attachments/assets/02f4a6b5-11b7-4674-b194-3acf1469ef17" />

The part of the code is in the setup function, so I cannot create a rectangle to cover the previous texts in the draw function. 
```
fill(255);
noStroke();
rect(0, 0, width/2, height);
```
* Use `erase()` can erase the code in the draw function (https://p5js.org/search/?term=erase)

<img width="1018" alt="截屏2025-02-10 16 44 12" src="https://github.com/user-attachments/assets/a8e7bca5-8475-4d88-b5e8-85dc4aad430d" />

If I go to the next step after the erase function, the things that have been ereased came back. 
* Because the code works as a loop, so the draw function will be actiavted again.
* My solution is to add erase function in every defined functions - which did not work
* At last, I tried to separate the selections into two buttons. I deleted the code for the selections and created two buttons in the splitCanvas function and it works fine.
```
function splitCanvas(){
  buttonA = createButton('Why not use an elevator?');
  buttonA.position(0, height -81);
  buttonA.mousePressed(wrongAnswer);

  buttonB = createButton('It is too tiring to climb up to the fifth floor.');
  buttonB.position(0, height -61);
  buttonB.mousePressed(rightAnswer);
}
```

<img width="1093" alt="截屏2025-02-10 16 22 23" src="https://github.com/user-attachments/assets/5a77ae30-83f8-4b84-ab52-bdddd2b013f3" />

The button that created in the draw function cannot be hided. 
* I removed the button from the draw function, instead, I worte it in the splitCanvas function
```
function splitCanvas(){
  button8  = createButton('next');
  button8.position(width/2 +3, height -30);
  button8.mousePressed(homePic);
}
```

<img width="1317" alt="截屏2025-02-13 01 10 26" src="https://github.com/user-attachments/assets/96aa18ff-c9ce-4ab6-9ba6-3f47c6daeda2" />

When I was using the webCam in the sketch, during the test, all the buttons and sudios were working as usual, but the images, the image of the camera, and the texts were not working. 
* I think this might because a part of the code is in the draw function, that's wht they were not influenced.

<img width="928" alt="截屏2025-02-13 01 22 07" src="https://github.com/user-attachments/assets/d8af4742-d85b-414e-804e-f975245bfdee" />

* I deleted all the code in the draw function and move them in the 'inBathroom' function.
```
function inBathroom(){
  pixelDensity(10);
  webCam = createCapture(VIDEO);
  webCam.size(200, 200);
  webCam.hide();
  image(webCam, 0, 0);
}
```
* The webCam image will be freezed from the start.

<img width="913" alt="截屏2025-02-13 01 33 46" src="https://github.com/user-attachments/assets/aa70415e-c872-4f89-b0fc-4f763e9b7844" />

* Tried with the most basic way of adding the camera to the skecth - the camera only appeared under the canvas, and still influenced the other code working progress.

<img width="924" alt="截屏2025-02-13 17 48 21" src="https://github.com/user-attachments/assets/e21a2bdc-b71d-47da-8a4e-6553d2770e0a" />

* Used the ` resizeCanvas() ` (https://p5js.org/reference/p5/resizeCanvas/) - resized the canvas to make the camera works inside the window.
* Filters ` filter() ` only work for images, so I cannot add anything to the basic camera (https://p5js.org/reference/p5/filter/)
* Since a normal camera does not achieve my plan, therefore I decieded not to use a webcam in this work. 

### Here is the URL to the webpage for this project: https: https://qzha880.github.io/Creative-Coding-and-Workbook/
