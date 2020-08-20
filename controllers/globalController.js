import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const DART_BASE_URL = "https://opendart.fss.or.kr/api/list.json";
const PAGE_POS = "&page_no=";
const SHOW_CORPS = "&page_count=";

// method = get 지원하면 xml포맷도 가능함.
// fetch기능으로 api 접근해야 하는 듯???

export const handleHome = async (req, res) => {
  try {
    res.render("home", { pagetitle: "Home" });
  } catch (error) {
    res.render("home", { pagetitle: "Home" });
    console.log(error);
  }
};

const getCorpList = (url_element, page_number) => {
  url_element = url_element + PAGE_POS + `${page_number}` + SHOW_CORPS + `100`;
  fetch(url_element)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const findCorp = (searchingTerm) => {
  const url_string = DART_BASE_URL + `?crtfc_key=${process.env.DART_KEY}`;
  const temp = getCorpList(url_string, 1);
  console.log("temp", temp);
};

export const getSearch = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  findCorp(searchingBy);
  res.render("search", { pagetitle: "Search", searchingBy });
};

export const postSearch = (req, res) => {};
