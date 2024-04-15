import express from "express";
import loaders from "./loaders/index.js";
import contact_tracer_db from "./helpers/mongoDBConnection.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
const projectPath = dirname(fileURLToPath(import.meta.url));

const app = express();

async function loadApp() {
  await loaders({
    _app: app,
    _projectPath: projectPath,
  });
}

loadApp();

export const server_app = app;
