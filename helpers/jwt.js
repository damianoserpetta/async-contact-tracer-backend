import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

const jwToken = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://contacttracer.eu.auth0.com/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: "https://contacttracer-api/",
  issuer: `https://contacttracer.eu.auth0.com/`,
  algorithms: ["RS256"],
});

export { jwToken };
