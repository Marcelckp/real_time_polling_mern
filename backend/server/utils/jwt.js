const assert = require("assert");
const jwt = require("jsonwebtoken");

/**
 * Manages all jwt related issues
 * @param  {string} secret
 */
class Jwt {
  /**
   * @param  {string} secret
   */
  constructor(secret) {
    assert.ok(secret, "Secret must be defined");
    this.secret = secret;
    this.iss = "com.yum-food/api";
    this.aud = "com.yum-food";
  }

  /**
   * decode jwt error
   * @param  {object} error
   * @return {object} the structured error
   */
  static decodeError(error) {
    switch (error.name) {
      case "TokenExpiredError":
        return new Error("Expired Token");

      case "JsonWebTokenError":
        return new Error("Unauthorized Token");
      default:
        return new Error("could not decode your token");
    }
  }

  /**
   * generate a new JWT
   * @param  {object} data
   * @param  {string} expiresIn
   * @return {string}
   */
  signToken(data, expiresIn = "12h") {
    const { iss } = this;
    const { aud } = this;
    return jwt.sign({ data, iss, aud }, this.secret, {
      expiresIn,
    });
  }

  /**
   * decode data
   * @param  {string} token
   * @return {object} the decoded token
   */
  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.secret, {
        iss: this.iss,
        aud: this.aud,
      });
      if (decoded.iss !== this.iss) throw jwt.JsonWebTokenError;
      const data = decoded.data;
      return data;
    } catch (err) {
      return Jwt.decodeError(err);
    }
  }

  /**
   * @param  {Express.Request} req - a request object
   * @return {string} - the ezxtracted token
   */
  static getTokenFromHeaders(req) {
    const {
      headers: { authorization },
      query,
    } = req;
    if (authorization && authorization.split(" ")[0] === "Bearer") {
      return authorization.split(" ")[1];
    }
    if (query && query.token) {
      return query.token;
    }
    return null;
  }
}

module.exports = { Jwt };
