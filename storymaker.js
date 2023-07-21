const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

const nouns1Array = ["cat", "dog", "bird", "tree", "book"];
const verbsArray = ["jumped", "ran", "flew", "read", "ate"];
const adjectivesArray = ["happy", "big", "bright", "funny", "green"];
const nouns2Array = ["moon", "sun", "star", "sky", "ocean"];
const settingsArray = ["park", "forest", "beach", "mountain", "city"];

function getRandomWordFromArray(wordArray) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

function noun1_on_click() {
  choosenNoun1.textContent = getRandomWordFromArray(nouns1Array);
}

function verb_on_click() {
  choosenVerb.textContent = getRandomWordFromArray(verbsArray);
}

function adjective_on_click() {
  choosenAdjective.textContent = getRandomWordFromArray(adjectivesArray);
}

function noun2_on_click() {
  choosenNoun2.textContent = getRandomWordFromArray(nouns2Array);
}

function setting_on_click() {
  choosenSetting.textContent = getRandomWordFromArray(settingsArray);
}

function generateRandomStory() {
  const randomNoun1 = getRandomWordFromArray(nouns1Array);
  const randomVerb = getRandomWordFromArray(verbsArray);
  const randomAdjective = getRandomWordFromArray(adjectivesArray);
  const randomNoun2 = getRandomWordFromArray(nouns2Array);
  const randomSetting = getRandomWordFromArray(settingsArray);

  return `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} in ${randomSetting}.`;
}

function playback_on_click() {
  const chosenNoun1 = choosenNoun1.textContent;
  if (chosenNoun1) {
    const chosenVerb = choosenVerb.textContent;
    const chosenAdjective = choosenAdjective.textContent;
    const chosenNoun2 = choosenNoun2.textContent;
    const chosenSetting = choosenSetting.textContent;
    story.textContent = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} in ${chosenSetting}.`;
  } else {
    story.textContent = "Please choose a noun first.";
  }
}

function random_on_click() {
  choosenNoun1.textContent = getRandomWordFromArray(nouns1Array);
  choosenVerb.textContent = getRandomWordFromArray(verbsArray);
  choosenAdjective.textContent = getRandomWordFromArray(adjectivesArray);
  choosenNoun2.textContent = getRandomWordFromArray(nouns2Array);
  choosenSetting.textContent = getRandomWordFromArray(settingsArray);

  const randomGeneratedStory = generateRandomStory();
  story.textContent = randomGeneratedStory;
}

// Event listeners for buttons
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
