import dotenv from "dotenv";
import fs from "fs";
import { text } from "body-parser";
import converter from "xml-js";
import { data } from "autoprefixer";

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

// const getCorpList = () => {
//   const xml = fs.readFile("../CORPCODE.xml", "utf8", (err, data) => {
//     if (err) throw err;
//     const option = {
//       compact: true,
//       spaces: 4,
//       ignoreAttributes: true,
//       ignoreDeclaration: true,
//     };

//     const jsonObj = converter.xml2js(data, option);
//     const corpList = jsonObj.result.list;
//     console.log(`Total Company Count is ... :${jsonObj.result.list.length}`);
//   });
// };

// refereced by https://github.com/nashwaan/xml-js/issues/53
const nativeType = (value) => {
  const nValue = Number(value);
  if (!isNaN(nValue)) {
    return nValue;
  }
  const bValue = value.toLowerCase();
  if (bValue === "true") {
    return true;
  } else if (bValue === "false") {
    return false;
  }
  return value;
};

// refereced by https://github.com/nashwaan/xml-js/issues/53
const removeJsonTextAttribute = (value, parentElement) => {
  try {
    const keyNo = Object.keys(parentElement._parent).length;
    const keyName = Object.keys(parentElement._parent)[keyNo - 1];
    parentElement._parent[keyName] = nativeType(value);
  } catch (e) {
    console.log(`ERROR at removeJsonTextAttribute : ${e}`);
  }
};

const getCorpList = () => {
  const xml = fs.readFileSync("../CORPCODE.xml", "utf8", "r");
  const option = {
    compact: true,
    trim: true,
    ignoreDeclaration: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreComment: true,
    ignoreCdata: true,
    ignoreDoctype: true,
    textFn: removeJsonTextAttribute,
  };

  const jsonObj = converter.xml2js(xml, option);
  const totalCorps = jsonObj.result.list;
  console.log(totalCorps);
  // const corpList = jsonObj.result.list;
  // console.log(`Total Company Count is ... :${jsonObj.result.list.length}`);
};

export const getSearch = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  try {
    const totalCorps = await getCorpList();
    res.render("search", { pagetitle: "Search", searchingBy, totalCorps });
  } catch (error) {
    console.log(`getCorpList has some ERROR : ${error}`);
  }
};

export const postSearch = (req, res) => {};
