const { handleResetBtn } = require("./reset");

const loginForm = document.getElementById("jsNickname");
const body = document.querySelector("body");
const greeting = document.getElementById("jsGreeting");
const searchForm = document.querySelectorAll("#jsSearch")[1];
const NICKNAME = "nickname";
const LOGGED_IN = "loggedIn";
const LOGGED_OUT = "loggedOut";
const SEARCHING = "searching";
const RESET_BTN = "jsResetBtn";

const nickname = localStorage.getItem(NICKNAME);

const paintGreeting = (text) => {
  if (greeting !== null) {
    const msgBox = document.createElement("span");
    const resetBtn = document.createElement("button");

    resetBtn.id = RESET_BTN;
    resetBtn.className = "resetBtn";
    msgBox.innerText = `Hello ${text} !!!`;
    resetBtn.innerText = "RESET 🗑";

    greeting.appendChild(msgBox);
    greeting.appendChild(resetBtn);

    body.className = LOGGED_IN;

    // reset nickname...
    resetBtn.addEventListener("click", handleResetBtn);
  }
};

const sendingNicknameForServer = (text) => {
  const inputElement = document.createElement("input");
  inputElement.type = "hidden";
  inputElement.name = "nickname";
  inputElement.value = text;
  searchForm.appendChild(inputElement);
};

const setName = (text) => {
  localStorage.setItem(NICKNAME, text);
  sendingNicknameForServer(text);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  paintGreeting(value);
  setName(value);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
}

const askForName = () => {
  loginForm.addEventListener("submit", handleSubmit);
};

const loadName = () => {
  const currentUser = localStorage.getItem(NICKNAME);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
};

const init = () => {
  loadName();
};

init();
