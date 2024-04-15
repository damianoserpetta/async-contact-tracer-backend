import indexRouter from "../routes/index.js";
import usersRouter from "../routes/users.js";
import contactsRouter from "../routes/contacts.js";

export default async ({ _app }) => {
  _app.use("/", indexRouter);
  _app.use("/users", usersRouter);
  _app.use("/contacts", contactsRouter);
};
