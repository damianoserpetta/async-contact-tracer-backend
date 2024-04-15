#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { server_app } from "../app.js";
import Debug from "debug";
import { createServer } from "http";

const debug = Debug("contact-tracing:server");
/**
 * Get port from environment and store in Express.
 */

var port = process.env.SERVER_PORT;
server_app.set("port", port);

/**
 * Create HTTP server.
 */

var server = createServer(server_app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
