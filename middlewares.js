import routes from "./routes";

// pug template로 변수를 보내줄 수 있음.
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "howRichCompany";
  res.locals.routes = routes;

  console.log("middleware is working....");
  next();
};
