import path from "path";
import hbs from "hbs";

export default async ({ _projectPath }) => {
  hbs.registerPartials(
    path.join(_projectPath + "/views/partials"),
    function (err) {
      if (err) throw err;
    }
  ); // Registering partials on handlebars.
};
