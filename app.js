const sceneTitle = document.querySelector("#scene-title");
const sceneImage = document.querySelector("#scene-image");
const story = document.querySelector("#story");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
const muteButton = document.querySelector("#mute");

const music = new Audio("sounds/music.wav");
const clickSound = new Audio("sounds/click.wav");
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/lose.wav");

music.loop = true;
music.volume = 0.5;
clickSound.volume = 0.5;
winSound.volume = 0.5;
loseSound.volume = 0.48;

let currentScene = "start";
let isMuted = false;
let musicStarted = false;

function playSound(sound) {
  if (isMuted) {
    return;
  }
  sound.currentTime = 0;
  sound.play().catch(function () {});
}

function startMusic() {
  if (musicStarted || isMuted) {
    return;
  }
  music.play().then(function () {
    musicStarted = true;
  }).catch(function () {});
}

function renderScene() {
  const scene = scenes[currentScene];
  const image = sceneImages[currentScene] || defaultImage;

  sceneTitle.textContent = scene.title;
  story.textContent = scene.text;
  sceneImage.src = image.src;
  sceneImage.alt = image.alt;

  if (scene.result) {
    choice1.hidden = true;
    choice2.hidden = true;

    music.volume = 0.2;
    if (scene.result === "win") {
      result.textContent = "YOU WIN! You escaped the town!";
      playSound(winSound);
    } else {
      result.textContent = "GAME OVER! You did not escape.";
      playSound(loseSound);
    }

    restart.hidden = false;
  } else {
    music.volume = 0.5;
    choice1.hidden = false;
    choice2.hidden = false;
    restart.hidden = true;
    result.textContent = "";

    choice1.textContent = scene.choices[0].text;
    choice2.textContent = scene.choices[1].text;
  }
}

function makeChoice(choiceIndex) {
  startMusic();
  playSound(clickSound);
  currentScene = scenes[currentScene].choices[choiceIndex].nextScene;
  renderScene();
}

choice1.addEventListener("click", function () {
  makeChoice(0);
});

choice2.addEventListener("click", function () {
  makeChoice(1);
});

restart.addEventListener("click", function () {
  playSound(clickSound);
  currentScene = "start";
  renderScene();
});

muteButton.addEventListener("click", function () {
  isMuted = !isMuted;
  muteButton.setAttribute("aria-pressed", String(isMuted));

  if (isMuted) {
    music.pause();
    muteButton.textContent = "🔇 Sound: Off";
  } else {
    if (musicStarted) {
      music.play().catch(function () {});
    }
    muteButton.textContent = "🔊 Sound: On";
  }
});

renderScene();