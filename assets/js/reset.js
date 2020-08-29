const body = document.querySelector("body");
const greeting = document.getElementById("jsGreeting");

const LOGGED_OUT = "loggedOut";
const NICKNAME = "nickname";

const removeGreeting = () => {
  greeting.innerHTML = "";
};

export const handleResetBtn = (event) => {
  console.log("check");
  body.className = LOGGED_OUT;
  localStorage.removeItem(NICKNAME);
  removeGreeting();
};
