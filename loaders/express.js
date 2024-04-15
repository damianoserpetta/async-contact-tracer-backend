import express from "express";
import path from "path";
import logger from "morgan";
import cors from "cors";

export default async ({ _app, _projectPath }) => {
  _app.use(cors());
  _app.use(logger("dev"));
  _app.use(express.json());
  _app.use(express.static(path.join(_projectPath, "/views/public")));
};
