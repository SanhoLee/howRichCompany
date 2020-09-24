// Global
const HOME = "/";

// Search

const SEARCH = "/search";
const COMPARE = "/compare";
const CART = "/cart";
const CART_DETAIL = "/:nickname";

const DART = "https://opendart.fss.or.kr";
const API = "/api";

const routes = {
  home: HOME,
  search: SEARCH,
  compare: COMPARE,
  cart: CART,
  cartDetail: (nickname) => {
    if (nickname) {
      return `/cart/${nickname}`;
    }
    return CART_DETAIL;
  },
  dart: DART,
  api: API,
};

export default routes;
