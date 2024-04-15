import { jwToken } from "../../helpers/jwt.js";

export default async ({ _app }) => {
  _app.use(jwToken);
};
