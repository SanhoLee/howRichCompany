import { NULL } from "node-sass";
import { test } from "./apiController";

// if method for get,, req.query has info.
export const getCart = (req, res) => {
  res.render("cart", { pagetitle: "Cart" });
};

const makeArrayFormat = (_element) => {
  if (typeof _element !== "object") {
    // in case of having one element just like this,,,,  _element = "something"
    return [_element];
  } else {
    // in case of having more than one element,,, _element = ["000000", "1123123"...]
    return _element;
  }
};

const makeListToObject = (corp_info) => {
  let temp_obj = new Object();
  temp_obj.corp_name = corp_info[0];
  temp_obj.corp_code = corp_info[1];
  return temp_obj;
};

const splitString = (target, delimiter) => {
  return target.split(delimiter);
};

const makeCartData = (targetList) => {
  // targetList is array element, looks like..."corp_name, corp_code"
  // So it needs divide with , delimeter
  let list_basket = [];
  targetList.map((potato) => {
    const split_corp_info = splitString(potato, ",");
    const corp_obj = makeListToObject(split_corp_info);
    list_basket.push(corp_obj);
  });
  return list_basket;
};

// if method for post,, req.body has info.
export const postCart = async (req, res) => {
  const {
    body: { corp_data: checkedBlocks },
  } = req;

  let checkedCorps = NULL;
  checkedCorps = makeArrayFormat(checkedBlocks);
  const cartCorps = makeCartData(checkedCorps);

  const temp = await test();
  console.log(temp[0]);

  res.render("cart", { pagetitle: "Cart", cartCorps });
};
