exports.DB_URL = process.env.DB_URL;
exports.DB_OPTIONS = {};
/**
 * @param  {User} user
 * @param  {string} token
 * @return {object}
 */
exports.formatUser = (user, token) => {
  if (user && token) {
    const u = user.toJSON();
    u.token = token;
    delete u.salt;
    delete u.hash;
    return u;
  }
  return null;
};

/**
 * @param  {User} user
 * @param  {string} token
 * @return {object}
 */
exports.tokenPayload = (user) => {
  return {
    username: user.username || null,
    id: user.id || null,
  };
};

exports.validatePoll = (title, description, candidates) => {
  if (title === "") return "Title must not be empty";
  if (description === "") return "Description must not be empty";
  if (candidates === "") return "candidates must not be empty";
  if (candidates.split(",").length < 2) return "candidates must be at least 2";

  return false;
};

exports.transformCandidates = (candidates) => {
  const candidatesList = candidates.split(",").map((cand, index) => {
    return {
      id: index + 1,
      name: cand.trim(""),
    };
  });
  return candidatesList;
};
