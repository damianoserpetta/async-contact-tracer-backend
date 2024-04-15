export function dbConnectionURI(DB_HOST, DB_PORT, DB_NAME) {
  return "mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME;
}
