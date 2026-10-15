const sceneTitle = document.querySelector("#scene-title");
const story = document.querySelector("#story");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");

let currentScene = "start";

function renderScene() {
  const scene = scenes[currentScene];

  sceneTitle.textContent = scene.title;
  story.textContent = scene.text;

  if (scene.result) {
    choice1.hidden = true;
    choice2.hidden = true;

    if (scene.result === "win") {
      result.textContent = "YOU WIN! You escaped the town!";
    } else {
      result.textContent = "GAME OVER! You did not escape.";
    }

    restart.hidden = false;
  } else {
    choice1.hidden = false;
    choice2.hidden = false;
    restart.hidden = true;
    result.textContent = "";

    choice1.textContent = scene.choices[0].text;
    choice2.textContent = scene.choices[1].text;
  }
}

choice1.addEventListener("click", function () {
  currentScene = scenes[currentScene].choices[0].nextScene;
  renderScene();
});

choice2.addEventListener("click", function () {
  currentScene = scenes[currentScene].choices[1].nextScene;
  renderScene();
});

restart.addEventListener("click", function () {
  currentScene = "start";
  renderScene();
});

renderScene();