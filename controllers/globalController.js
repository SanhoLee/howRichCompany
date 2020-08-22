import dotenv from "dotenv";
import fs from "fs";
import { text } from "body-parser";
import xml2Json from "xml-js";

dotenv.config();

const DART_BASE_URL = "https://opendart.fss.or.kr/api/list.json";
const PAGE_POS = "&page_no=";
const SHOW_CORPS = "&page_count=100";
let FETCH_COUNT = 0;

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

const getCorpList = () => {
  const xml = fs.readFile("../CORPCODE.xml", "utf8", (err, data) => {
    if (err) throw err;
    const parsingOption = {
      compact: true,
      spaces: 4,
      ignoreAttributes: true,
      ignoreDeclaration: true,
    };

    const jsonObj = xml2Json.xml2js(data, parsingOption);
    console.log(`Total Company Count is ... :${jsonObj.result.list.length}`);
  });
};

export const getSearch = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  try {
    await getCorpList();
  } catch (error) {
    console.log(`getCorpList has some ERROR : ${error}`);
  }

  res.render("search", { pagetitle: "Search", searchingBy });
};

export const postSearch = (req, res) => {};
