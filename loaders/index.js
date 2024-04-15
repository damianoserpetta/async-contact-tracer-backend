import expressLoader from "./express.js";
import viewEngineLoader from "./view_engine/view_engine.js";
import dbLoader from "./db/db.js";
import errorHandlerLoader from "./error.js";
import routersLoader from "./routers.js";
import jwtLoader from "./jwt/jwt.js";

export default async ({ _app, _projectPath, _db }) => {
  /** Express Loader */
  await expressLoader({ _app, _projectPath });

  /** JWT Loader */
  //await jwtLoader({ _app });

  /** Routes Loader */
  await routersLoader({ _app });

  /** View Engine Loader */
  await viewEngineLoader({ _app, _projectPath });

  /** Error Handler */
  await errorHandlerLoader(_app);
};
