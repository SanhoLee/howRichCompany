const loginForm = document.getElementById("jsNickname");
const body = document.querySelector("body");
const greeting = document.getElementById("jsGreeting");
const searchBox = document.getElementById("jsSearchBox");

const NICKNAME = "nickname";

const LOGGED_IN = "loggedIn";
const LOGGED_OUT = "loggedOut";

const nickname = localStorage.getItem(NICKNAME);

const paintGreeting = (text) => {
  const greetingMsg = `Hello ${text} !!!`;
  greeting.innerText = greetingMsg;
  body.className = LOGGED_IN;
};

const setName = (text) => {
  localStorage.setItem(NICKNAME, text);
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
