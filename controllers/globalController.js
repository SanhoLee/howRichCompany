import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const DART_KEY = process.env.DART_KEY;
const DART_BASE_URL = "https://opendart.fss.or.kr/api/list.json";
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

export const getSearch = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  const url = DART_BASE_URL + "?crtfc_key=" + DART_KEY;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.list[0].corp_name);
    })
    .catch((err) => {
      console.log("Error is Fired ... : ", err);
    });
  res.render("search", { pagetitle: "Search", searchingBy });
};

export const postSearch = (req, res) => {};
