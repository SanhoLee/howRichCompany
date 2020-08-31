const companies = document.getElementsByClassName("company_name");

const CORP_NAME = "corp_name";
const CORP_CODE = "corp_code";
const TRUE = "true";
const FALSE = "false";
let companyCart = [];

const checkGoCart = () => {
  Array.from(companies).forEach((company) => {
    const booleanValue = company.querySelector("input").value;
    if (booleanValue === TRUE) {
      const corp_info = company.querySelector(".corp_info");
      const corp_code = corp_info.lastChild.innerText;

      console.log(corp_code);
    } else {
    }
  });
};

const handleChk = (event) => {
  //   on event.path list, third element is for h5.company_name
  const { path, target: input } = event;
  let corp_info = path[2].outerText;
  corp_info = corp_info.split(" | ");

  if (input.value !== FALSE) {
    input.value = FALSE;
    // pop selected element
    checkGoCart();
  } else {
    input.value = TRUE;

    let corp_obj = new Object();
    corp_obj.CORP_NAME = corp_info[0];
    corp_obj.CORP_CODE = corp_info[1];
    companyCart.push(corp_obj);
  }
};

const init = () => {
  if (companies) {
    Array.from(companies).forEach((company) => {
      company.addEventListener("click", handleChk);
    });
  }
};

init();
