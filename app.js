const menu = document.querySelector("#menu");
const game = document.querySelector("#game");
const startButton = document.querySelector("#start-game");
const difficultySelect = document.querySelector("#difficulty");
const modeLabel = document.querySelector("#mode-label");
const timeRemaining = document.querySelector("#time-remaining");
const timerPanel = document.querySelector("#timer-panel");
const timerFill = document.querySelector("#timer-fill");
const timerWarning = document.querySelector("#timer-warning");
const scenePanel = document.querySelector("#scene-panel");
const sceneTitle = document.querySelector("#scene-title");
const sceneImage = document.querySelector("#scene-image");
const story = document.querySelector("#story");
const typingHint = document.querySelector("#typing-hint");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const pauseButton = document.querySelector("#pause");
const resumeButton = document.querySelector("#resume");
const pauseOverlay = document.querySelector("#pause-overlay");
const toast = document.querySelector("#toast");
const flash = document.querySelector("#flash");
const sanityFill = document.querySelector("#sanity-fill");
const sanityText = document.querySelector("#sanity-text");
const sanityTrack = document.querySelector("#sanity-track");
const inventoryList = document.querySelector("#inventory-list");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
const muteButton = document.querySelector("#mute");
const choiceCount = document.querySelector("#choice-count");
const visitCount = document.querySelector("#visit-count");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");

const music = new Audio("sounds/music.wav");
const clickSound = new Audio("sounds/click.wav");
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/lose.wav");
music.loop = true;
music.volume = 0.28;
clickSound.volume = 0.45;
winSound.volume = 0.5;
loseSound.volume = 0.48;

const allLocations = Object.keys(scenes).length;

let currentScene = "start";
let choicesMade = 0;
let visitedScenes = new Set(["start"]);
let isMuted = false;
let musicStarted = false;
let typingTimer = null;
let fullStoryText = "";

const difficultySeconds = { easy: 90, medium: 60, hard: 45 };
let chosenDifficulty = "medium";
let countdownId = null;
let deadline = 0;
let gameEnded = true;
let isPaused = false;
let remainingMs = 0;

const maxSanity = 100;
let sanity = maxSanity;
let inventory = [];
let pendingToast = "";

function stopCountdown() {
  if (countdownId !== null) {
    clearInterval(countdownId);
    countdownId = null;
  }
}

function formatTime(seconds) {
  return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
    String(seconds % 60).padStart(2, "0");
}

function updateCountdown() {
  if (gameEnded) return;
  const secondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  const total = difficultySeconds[chosenDifficulty];
  timeRemaining.textContent = formatTime(secondsLeft);
  timerFill.style.width = (secondsLeft / total * 100) + "%";
  timerPanel.classList.toggle("timer-urgent", secondsLeft <= 15);
  timerWarning.textContent = secondsLeft <= 15
    ? "HURRY. THE TOWN IS CLOSING IN."
    : "Find your way out before the clock reaches zero.";
  if (secondsLeft === 0) {
    loseOnTimeout();
  }
}

function startCountdown() {
  stopCountdown();
  const total = difficultySeconds[chosenDifficulty];
  deadline = Date.now() + total * 1000;
  gameEnded = false;
  modeLabel.textContent = chosenDifficulty.toUpperCase() + " MODE";
  timerPanel.classList.remove("timer-urgent");
  updateCountdown();
  countdownId = setInterval(updateCountdown, 200);
}

function pauseGame() {
  if (gameEnded || isPaused) return;
  isPaused = true;
  remainingMs = Math.max(0, deadline - Date.now());
  stopCountdown();
  finishTyping();
  scenePanel.hidden = true;
  pauseOverlay.hidden = false;
  pauseButton.textContent = "▶ Resume";
  pauseButton.setAttribute("aria-pressed", "true");
  timerWarning.textContent = "Paused. The clock is frozen.";
  music.pause();
  resumeButton.focus();
}

function resumeGame() {
  if (!isPaused) return;
  isPaused = false;
  deadline = Date.now() + remainingMs;
  scenePanel.hidden = false;
  pauseOverlay.hidden = true;
  pauseButton.textContent = "⏸ Pause";
  pauseButton.setAttribute("aria-pressed", "false");
  updateCountdown();
  countdownId = setInterval(updateCountdown, 200);
  if (!isMuted) startMusic();
  pauseButton.focus();
}

function scare() {
  flash.classList.remove("flash-on");
  scenePanel.classList.remove("shake");
  void flash.offsetWidth;
  flash.classList.add("flash-on");
  scenePanel.classList.add("shake");
}

function loseOnTimeout() {
  if (gameEnded) return;
  gameEnded = true;
  stopCountdown();
  finishTyping();
  choice1.hidden = true;
  choice2.hidden = true;
  restart.hidden = false;
  result.textContent = "TIME'S UP! Midnight has claimed you. GAME OVER.";
  result.className = "result-lose";
  toast.textContent = "";
  choice3.hidden = true;
  pauseButton.disabled = true;
  sceneTitle.textContent = "Too Late";
  sceneImage.src = sceneImages.clocktower.src;
  sceneImage.alt = "A clock tower frozen at midnight as time runs out";
  story.textContent = "The last clock chimes. Every road vanishes into the darkness.";
  timerWarning.textContent = "No time left. Try another route or difficulty.";
  music.volume = 0.10;
  playSound(loseSound);
  scare();
}


function playSound(sound) {
  if (isMuted) return;
  sound.currentTime = 0;
  sound.play().catch(function () {});
}

function startMusic() {
  if (isMuted) return;
  music.play().then(function () {
    musicStarted = true;
  }).catch(function () {});
}

function finishTyping() {
  if (typingTimer !== null) {
    clearInterval(typingTimer);
    typingTimer = null;
  }
  story.textContent = fullStoryText;
  typingHint.hidden = true;
}

function typeStory(text) {
  finishTyping();
  fullStoryText = text;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    story.textContent = text;
    return;
  }
  story.textContent = "";
  typingHint.hidden = false;
  let index = 0;
  typingTimer = setInterval(function () {
    index = Math.min(index + 2, text.length);
    story.textContent = text.slice(0, index);
    if (index === text.length) finishTyping();
  }, 18);
}

function hasItem(id) {
  return inventory.includes(id);
}

function showInventory() {
  inventoryList.replaceChildren();
  if (inventory.length === 0) {
    const empty = document.createElement("li");
    empty.className = "inventory-empty";
    empty.textContent = "Empty";
    inventoryList.appendChild(empty);
    return;
  }
  inventory.forEach(function (id) {
    const entry = document.createElement("li");
    entry.className = "inventory-item";
    entry.textContent = items[id].icon + " " + items[id].name;
    inventoryList.appendChild(entry);
  });
}

function showSanity() {
  sanityFill.style.width = sanity + "%";
  sanityText.textContent = sanity + "%";
  sanityTrack.setAttribute("aria-valuenow", String(sanity));
  const level = sanity <= 25 ? "critical" : sanity <= 55 ? "low" : "ok";
  game.dataset.sanity = level;
  document.documentElement.style.setProperty("--dark", String(((maxSanity - sanity) / maxSanity * 0.6).toFixed(2)));
}

function enterScene(id) {
  const messages = [];
  const itemId = sceneItems[id];
  if (itemId && !hasItem(itemId)) {
    inventory.push(itemId);
    messages.push("You picked up: " + items[itemId].icon + " " + items[itemId].name);
  }
  const change = sanityChanges[id] || 0;
  if (change !== 0) {
    sanity = Math.max(0, Math.min(maxSanity, sanity + change));
    messages.push("Sanity " + (change > 0 ? "+" : "") + change);
  }
  pendingToast = messages.join("  ·  ");
}

function renderScene() {
  const scene = scenes[currentScene];
  const image = sceneImages[currentScene] || defaultImage;
  sceneTitle.textContent = scene.title;
  sceneImage.src = image.src;
  sceneImage.alt = image.alt;
  typeStory(scene.text);

  scenePanel.classList.remove("scene-enter");
  void scenePanel.offsetWidth;
  scenePanel.classList.add("scene-enter");

  showInventory();
  showSanity();
  toast.textContent = pendingToast;
  pendingToast = "";
  choiceCount.textContent = choicesMade;
  visitCount.textContent = visitedScenes.size;
  const percent = Math.round(visitedScenes.size / allLocations * 100);
  progressFill.style.width = percent + "%";
  progressTrack.setAttribute("aria-valuenow", String(percent));

  if (scene.result) {
    gameEnded = true;
    stopCountdown();
    timerWarning.textContent = scene.result === "win" ? "Escaped with " + timeRemaining.textContent + " remaining!" : "Your journey has ended.";
    choice1.hidden = true;
    choice2.hidden = true;
    choice3.hidden = true;
    pauseButton.disabled = true;
    music.volume = 0.10;
    result.textContent = scene.result === "win"
      ? "YOU WIN! You escaped the town!"
      : "GAME OVER! You did not escape.";
    result.className = scene.result === "win" ? "result-win" : "result-lose";
    playSound(scene.result === "win" ? winSound : loseSound);
    if (scene.result === "lose") scare();
    restart.hidden = false;
  } else {
    music.volume = 0.28;
    choice1.hidden = false;
    choice2.hidden = false;
    restart.hidden = true;
    result.textContent = "";
    result.className = "";
    choice1.textContent = scene.choices[0].text;
    choice2.textContent = scene.choices[1].text;

    const itemChoice = itemChoices[currentScene];
    if (itemChoice && hasItem(itemChoice.item)) {
      choice3.hidden = false;
      choice3.textContent = items[itemChoice.item].icon + " " + itemChoice.text;
    } else {
      choice3.hidden = true;
    }
  }
}

function makeChoice(index) {
  if (gameEnded || isPaused) return;
  updateCountdown();
  if (gameEnded) return;
  const scene = scenes[currentScene];
  let nextScene;
  if (index === 2) {
    const itemChoice = itemChoices[currentScene];
    if (!itemChoice || !hasItem(itemChoice.item)) return;
    nextScene = itemChoice.nextScene;
  } else {
    if (!scene.choices || !scene.choices[index]) return;
    nextScene = scene.choices[index].nextScene;
  }
  playSound(clickSound);
  enterScene(nextScene);
  if (sanity === 0 && scenes[nextScene].result !== "win") {
    nextScene = "madness";
  }
  currentScene = nextScene;
  choicesMade += 1;
  visitedScenes.add(currentScene);
  renderScene();
}

function beginGame() {
  chosenDifficulty = difficultySelect.value;
  playSound(clickSound);
  startMusic();
  menu.hidden = true;
  game.hidden = false;
  currentScene = "start";
  choicesMade = 0;
  visitedScenes = new Set(["start"]);
  sanity = maxSanity;
  inventory = [];
  pendingToast = "";
  isPaused = false;
  scenePanel.hidden = false;
  pauseOverlay.hidden = true;
  pauseButton.disabled = false;
  pauseButton.textContent = "⏸ Pause";
  pauseButton.setAttribute("aria-pressed", "false");
  result.className = "";
  startCountdown();
  renderScene();
}

startButton.addEventListener("click", beginGame);
choice1.addEventListener("click", function () { makeChoice(0); });
choice2.addEventListener("click", function () { makeChoice(1); });
choice3.addEventListener("click", function () { makeChoice(2); });
pauseButton.addEventListener("click", function () {
  if (isPaused) resumeGame();
  else pauseGame();
});
resumeButton.addEventListener("click", resumeGame);
document.addEventListener("keydown", function (event) {
  const typing = event.target instanceof HTMLSelectElement;
  if ((event.key === "p" || event.key === "P") && !typing && !game.hidden) {
    if (isPaused) resumeGame();
    else pauseGame();
  }
});
restart.addEventListener("click", function () {
  stopCountdown();
  gameEnded = true;
  isPaused = false;
  finishTyping();
  document.documentElement.style.setProperty("--dark", "0");
  game.hidden = true;
  menu.hidden = false;
  music.pause();
  music.currentTime = 0;
});
story.addEventListener("click", finishTyping);
story.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    finishTyping();
  }
});

muteButton.addEventListener("click", function () {
  isMuted = !isMuted;
  muteButton.setAttribute("aria-pressed", String(isMuted));
  if (isMuted) {
    music.pause();
    muteButton.textContent = "🔇 Sound: Off";
  } else {
    startMusic();
    muteButton.textContent = "🔊 Sound: On";
  }
});
