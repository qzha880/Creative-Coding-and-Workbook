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
* font webs: https://www.fonts.net.cn/fonts-zh/tag-katong2-1.html, https://www.dafont.com/theme.php?cat=201&page=12 
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

  
### Problem met
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

### Here is the URL to the webpage for this project: https: https://qzha880.github.io/Creative-Coding-and-Workbook/
