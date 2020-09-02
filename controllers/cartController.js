// if method for get,, req.query has info.
export const getCart = (req, res) => {
  res.render("cart", { pagetitle: "Cart" });
};

// if method for post,, req.body has info.
export const postCart = (req, res) => {
  const {
    body: { corp_code: checkedCorps },
  } = req;
  console.log(checkedCorps);

  res.render("cart", { pagetitle: "Cart", checkedCorps });
};
