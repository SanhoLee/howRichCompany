export const handleHome = async (req, res) => {
  try {
    console.log("This is Try section..");
    res.render("home", { pagetitle: "Home" });
  } catch (error) {
    res.render("home", { pagetitle: "Home" });
    console.log(error);
  }
};
