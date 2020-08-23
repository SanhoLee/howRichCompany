const nickName = document.getElementById("jsNickname");
const formDiv = nickName.lastChild;
const form = formDiv.querySelector("form");

const SHOWING_ON = "showing";

const handleSubmit = (event) => {
  event.preventDefault;
  const currentValue = input.value;
  localStorage.setItem("nickname", currentValue);
};

const askForName = () => {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
};

const init = () => {
  askForName();
  console.log("hello");
};

if (form) {
  init();
}
