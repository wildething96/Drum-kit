let buttons = [];
let audio = [];
let title = document.getElementById("title");

console.log(title);
audio.push(new Audio("drum-sounds/sound1.mp3"));
buttons.push(document.getElementById("drum7"));

audio.push(new Audio("drum-sounds/sound2.mp3"));
buttons.push(document.getElementById("drum8"));

audio.push(new Audio("drum-sounds/sound3.mp3"));
buttons.push(document.getElementById("drum9"));

audio.push(new Audio("drum-sounds/sound4.mp3"));
buttons.push(document.getElementById("drum4"));

audio.push(new Audio("drum-sounds/sound5.mp3"));
buttons.push(document.getElementById("drum5"));

audio.push(new Audio("drum-sounds/sound6.mp3"));
buttons.push(document.getElementById("drum6"));

audio.push(new Audio("drum-sounds/sound7.mp3"));
buttons.push(document.getElementById("drum1"));

audio.push(new Audio("drum-sounds/sound8.mp3"));
buttons.push(document.getElementById("drum2"));

audio.push(new Audio("drum-sounds/sound9.mp3"));
buttons.push(document.getElementById("drum3"));

for (let i = 0; i < 9; i++) {
  buttons[i].addEventListener("click", () => {
    audio[i].currentTime = 0;
    audio[i].play();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key - i - 1 === 0) {
      lightup();
      buttons[i].click();
      buttons[i].classList.add("clicked");
      setTimeout(() => {
        buttons[i].classList.add("extended");
      }, 300);
      setTimeout(() => {
        buttons[i].classList.add("extended2");
      }, 600);
      setTimeout(() => {
        buttons[i].classList.remove("clicked", "extended", "extended2");
      }, 900);
    }
  });
}

var clickedTimeout
var clickTimeout

function lightup() {
  try {
    clearTimeout(clickedTimeout);
    clearTimeout(clickTimeout);
  } catch {
    
  } 
  finally {
    clickedTimeout = setTimeout(() => {
      title.classList.remove("clicked");
    }, 1500);
    clickTimeout = setTimeout(() => {
      title.classList.remove("click");
    }, 200);
    title.classList.add("clicked");
    title.classList.add("click")
    clickedTimeout;
    clickTimeout
  }
}
