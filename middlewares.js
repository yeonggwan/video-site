import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "유튜브클론";
  res.locals.routes = routes;
  next();
};
