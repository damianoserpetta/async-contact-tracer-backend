import handlebarsLoader from "./handlebars.js";
import path from "path";

export default async ({ _app, _projectPath }) => {
  /** View engine setup */
  _app.set("view engine", "hbs");
  _app.set("views", path.join(_projectPath, "/views"));

  /** Handlebars Loader */
  await handlebarsLoader({ _projectPath });
};
