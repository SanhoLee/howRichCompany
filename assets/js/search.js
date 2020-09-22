const header = document.querySelector(".header");
const searchForm = document.querySelectorAll("#jsSearch")[1];

const handleSearchForm = (event) => {
  console.log(header);
  header.style.display = "block";
};

const showHeader = () => {
  const pathName = window.location.pathname;
  if (pathName !== "/") {
    console.log(pathName);
    header.style.display = "block";
  } else {
  }
};

const searchInit = () => {
  showHeader();
};

searchInit();
