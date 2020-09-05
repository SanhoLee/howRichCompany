import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const YEAR = 2016;
const KIND_OF_REPORT = 11011;

// corp obj keys..
const KEY = "?crtfc_key=" + process.env.DART_KEY;
const CORP_CODE = "&corp_code=";
const BSNS_YEAR = "&bsns_year=" + YEAR; // 사업연도, 4 digit, example:2016
const REPORT_CODE = "&reprt_code=" + KIND_OF_REPORT; // 보고서코드, 5 digit, example:11011(사업보고서)
// 상장기업 재무정보 url
const dartUrl_base =
  "https://opendart.fss.or.kr/api/fnlttMultiAcnt.json" +
  KEY +
  BSNS_YEAR +
  REPORT_CODE +
  CORP_CODE +
  "00126380";

let temp_list = [];

export const test = async () => {
  console.log(dartUrl_base);
  const rsp = await fetch(dartUrl_base)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      // console.log(res);
      return res.list;
    })
    .catch((error) => console.log(error));
  temp_list.push(rsp[0]);
  // console.log(rsp);
  return rsp;
};
