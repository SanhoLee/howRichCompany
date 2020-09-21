import dotenv from "dotenv";
import fs from "fs";
import converter from "xml-js";
import routes from "../routes";

dotenv.config();

const DART_BASE_URL = "https://opendart.fss.or.kr/api/list.json";
const PAGE_POS = "&page_no=";
const SHOW_CORPS = "&page_count=100";

// corp obj keys..
const CORP_CODE = "corp_code";
const CORP_NAME = "corp_name";
const STOCK_CODE = "stock_code";
const MODIFY_DATE = "modify_date";

const NUMBER_OF_CODE = 8;

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
  return totalCorps;
};

const make8DigitCode = (corp_element) => {
  const code = String(corp_element[CORP_CODE]);
  const diff = NUMBER_OF_CODE - code.length;
  if (diff !== 0) {
    const newCode = "0".repeat(diff) + code;
    corp_element[CORP_CODE] = newCode;
    return corp_element;
  } else {
    return corp_element;
  }
};

const updateToApiFormat = (list_of_object) =>
  list_of_object.map((potato) => make8DigitCode(potato));

const foundCorpList = ({ list, term }) => {
  const foundList = list.filter((potato) => potato[CORP_NAME].includes(term));
  const updatedCorpList = updateToApiFormat(foundList);

  return updatedCorpList;
};

export const getSearch = async (req, res) => {
  const {
    query: { term: searchingBy, nickname },
  } = req;
  try {
    const totalCorps = await getCorpList();
    const foundCorps = foundCorpList({ list: totalCorps, term: searchingBy });
    res.render("search", {
      pagetitle: "Search",
      searchingBy,
      foundCorps,
      nickname,
    });
  } catch (error) {
    console.log(`getCorpList has some ERROR : ${error}`);
    res.render("search", { pagetitle: "Search", searchingBy, foundCorps: [] });
  }
};

export const postSearch = (req, res) => {};
