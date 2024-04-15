import createError from "http-errors";
export default async (_app) => {
  /** ERROR HANDLING */

  /** Catch 404 and forward to error handler */

  _app.use(function (req, res, next) {
    next(createError(404));
  });

  /** Error handler */
  _app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error", { layout: false });
  });
};
