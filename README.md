<img width="1440" alt="截屏2025-02-07 10 50 23" src="https://github.com/user-attachments/assets/77116b48-1ea3-4fc2-9ead-05eae0b93921" /># Creative-Coding-and-Workbook
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
I create a function to clear the canvas and prepare for the next step
* Used rect to cover the area that I want to make blank
  ```
  noStroke();
  rect(0, height -150, width, height);
  fill(0);
  ```
* Hide the button ` button.hide(); ` - hide the old button and create a new one to continue the next step.
* I learnt to use `var` http://wiki.iad.zhdk.ch/PB/2554331315/p5.js+Variables 
### Problem met
<img width="1440" alt="截屏2025-02-07 05 20 09" src="https://github.com/user-attachments/assets/802b4eb0-cabe-4700-948b-ef29f89ac5f1" />

If I change the order of clicking the button, the text will not come up 
* The text has the same colour as the background due to the order change - write the code for the text colour again to solve the problem ` fill(0); `

<img width="1440" alt="截屏2025-02-07 10 50 23" src="https://github.com/user-attachments/assets/3bddf0e6-954b-4f9e-8eed-646b608de2e5" />

I cannot resize the canvas by changing the window size. `resizeCanvas(windowWidth, windowHeight);`
* Because once the canvas has been resized, all the images and texts will be covered by the new canvas. (since the images and the texts are not in the draw function)


### Here is the URL to the webpage for this project: https: https://qzha880.github.io/Creative-Coding-and-Workbook/
