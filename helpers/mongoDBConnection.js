import mongoose from "mongoose";
import dotenv from "dotenv/config";
import { dbConnectionURI } from "../utils/db.js";

const DB_CONN = dbConnectionURI(
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_NAME
);

await mongoose.connect(DB_CONN, { useNewUrlParser: true }).then(() => {
  console.log("database connesso");
});

export default mongoose.Connection;
