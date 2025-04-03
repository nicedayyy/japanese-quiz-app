// Full character maps for Hiragana and Katakana
const hiraganaMap = [
  { character: 'あ', romaji: 'a' },
  { character: 'い', romaji: 'i' },
  { character: 'う', romaji: 'u' },
  { character: 'え', romaji: 'e' },
  { character: 'お', romaji: 'o' },
  { character: 'か', romaji: 'ka' },
  { character: 'き', romaji: 'ki' },
  { character: 'く', romaji: 'ku' },
  { character: 'け', romaji: 'ke' },
  { character: 'こ', romaji: 'ko' },
  { character: 'さ', romaji: 'sa' },
  { character: 'し', romaji: 'shi' },
  { character: 'す', romaji: 'su' },
  { character: 'せ', romaji: 'se' },
  { character: 'そ', romaji: 'so' },
  { character: 'た', romaji: 'ta' },
  { character: 'ち', romaji: 'chi' },
  { character: 'つ', romaji: 'tsu' },
  { character: 'て', romaji: 'te' },
  { character: 'と', romaji: 'to' },
  { character: 'な', romaji: 'na' },
  { character: 'に', romaji: 'ni' },
  { character: 'ぬ', romaji: 'nu' },
  { character: 'ね', romaji: 'ne' },
  { character: 'の', romaji: 'no' },
  { character: 'は', romaji: 'ha' },
  { character: 'ひ', romaji: 'hi' },
  { character: 'ふ', romaji: 'fu' },
  { character: 'へ', romaji: 'he' },
  { character: 'ほ', romaji: 'ho' },
  { character: 'ま', romaji: 'ma' },
  { character: 'み', romaji: 'mi' },
  { character: 'む', romaji: 'mu' },
  { character: 'め', romaji: 'me' },
  { character: 'も', romaji: 'mo' },
  { character: 'や', romaji: 'ya' },
  { character: 'ゆ', romaji: 'yu' },
  { character: 'よ', romaji: 'yo' },
  { character: 'ら', romaji: 'ra' },
  { character: 'り', romaji: 'ri' },
  { character: 'る', romaji: 'ru' },
  { character: 'れ', romaji: 're' },
  { character: 'ろ', romaji: 'ro' },
  { character: 'わ', romaji: 'wa' },
  { character: 'を', romaji: 'wo' },
  { character: 'ん', romaji: 'n' }
];

const katakanaMap = [
  { character: 'ア', romaji: 'a' },
  { character: 'イ', romaji: 'i' },
  { character: 'ウ', romaji: 'u' },
  { character: 'エ', romaji: 'e' },
  { character: 'オ', romaji: 'o' },
  { character: 'カ', romaji: 'ka' },
  { character: 'キ', romaji: 'ki' },
  { character: 'ク', romaji: 'ku' },
  { character: 'ケ', romaji: 'ke' },
  { character: 'コ', romaji: 'ko' },
  { character: 'サ', romaji: 'sa' },
  { character: 'シ', romaji: 'shi' },
  { character: 'ス', romaji: 'su' },
  { character: 'セ', romaji: 'se' },
  { character: 'ソ', romaji: 'so' },
  { character: 'タ', romaji: 'ta' },
  { character: 'チ', romaji: 'chi' },
  { character: 'ツ', romaji: 'tsu' },
  { character: 'テ', romaji: 'te' },
  { character: 'ト', romaji: 'to' },
  { character: 'ナ', romaji: 'na' },
  { character: 'ニ', romaji: 'ni' },
  { character: 'ヌ', romaji: 'nu' },
  { character: 'ネ', romaji: 'ne' },
  { character: 'ノ', romaji: 'no' },
  { character: 'ハ', romaji: 'ha' },
  { character: 'ヒ', romaji: 'hi' },
  { character: 'フ', romaji: 'fu' },
  { character: 'ヘ', romaji: 'he' },
  { character: 'ホ', romaji: 'ho' },
  { character: 'マ', romaji: 'ma' },
  { character: 'ミ', romaji: 'mi' },
  { character: 'ム', romaji: 'mu' },
  { character: 'メ', romaji: 'me' },
  { character: 'モ', romaji: 'mo' },
  { character: 'ヤ', romaji: 'ya' },
  { character: 'ユ', romaji: 'yu' },
  { character: 'ヨ', romaji: 'yo' },
  { character: 'ラ', romaji: 'ra' },
  { character: 'リ', romaji: 'ri' },
  { character: 'ル', romaji: 'ru' },
  { character: 'レ', romaji: 're' },
  { character: 'ロ', romaji: 'ro' },
  { character: 'ワ', romaji: 'wa' },
  { character: 'ヲ', romaji: 'wo' },
  { character: 'ン', romaji: 'n' }
];

// Globals for game state
let currentEntry = null;
let selectedCharacters = [];

// Utility functions
const getElement = (id) => document.getElementById(id);

// Game logic
function randomEntry() {
  const index = Math.floor(Math.random() * selectedCharacters.length);
  currentEntry = selectedCharacters[index];

  // Update UI with selected character
  getElement("character").textContent = currentEntry.character;
  getElement("message").textContent = "";
  getElement("romajiInput").value = "";
}

function toggleSelection(boxId, map) {
  const box = getElement(boxId);
  const isSelected = box.getAttribute("data-selected") === "true";

  // Update selection state
  box.setAttribute("data-selected", !isSelected);

  // Update the selectedCharacters array
  selectedCharacters = isSelected
    ? selectedCharacters.filter(entry => !map.includes(entry))
    : selectedCharacters.concat(map);
}

function startGame() {
  // Validate selections
  const hiraganaSelected = getElement("hiraganaBox").getAttribute("data-selected") === "true";
  const katakanaSelected = getElement("katakanaBox").getAttribute("data-selected") === "true";

  selectedCharacters = [];
  if (hiraganaSelected) selectedCharacters.push(...hiraganaMap);
  if (katakanaSelected) selectedCharacters.push(...katakanaMap);

  if (selectedCharacters.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  // Transition to the game screen
  getElement("selectionScreen").style.display = "none";
  getElement("gameScreen").style.display = "block";

  randomEntry();
}

function handleKeyPress(e) {
  if (e.key !== "Enter") return;

  const userInput = e.target.value.trim().toLowerCase();
  const message = userInput === currentEntry.romaji ? "Correct!" : "Try again!";
  getElement("message").textContent = message;

  // Show next character after a delay
  setTimeout(randomEntry, 1000);
}

function goBack() {
  getElement("gameScreen").style.display = "none";
  getElement("selectionScreen").style.display = "block";
}

// NEW SETTINGS FUNCTIONS
function openSettings() {
  // Hide other screens and display the settings screen
  getElement("selectionScreen").style.display = "none";
  getElement("gameScreen").style.display = "none";
  getElement("settingsScreen").style.display = "block";
}

function closeSettings() {
  // Hide the settings screen and return to the selection screen
  getElement("settingsScreen").style.display = "none";
  getElement("selectionScreen").style.display = "block";
}

// Event listeners
function addEventListeners() {
  getElement("hiraganaBox").addEventListener("click", () => toggleSelection("hiraganaBox", hiraganaMap));
  getElement("katakanaBox").addEventListener("click", () => toggleSelection("katakanaBox", katakanaMap));
  getElement("startButton").addEventListener("click", startGame);
  getElement("romajiInput").addEventListener("keydown", handleKeyPress);
  getElement("backButton").addEventListener("click", goBack);

  // Settings screen event listeners
  getElement("settingsButton").addEventListener("click", openSettings);
  getElement("settingsBackButton").addEventListener("click", closeSettings);
}

// Initialize app
window.onload = () => {
  getElement("selectionScreen").style.display = "block";
  getElement("gameScreen").style.display = "none";
  getElement("settingsScreen").style.display = "none";

  addEventListeners();
};