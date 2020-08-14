export const handleHome = async (req, res) => {
  try {
    res.render("home", { pagetitle: "Home" });
  } catch (error) {
    res.render("home", { pagetitle: "Home" });
    console.log(error);
  }
};
