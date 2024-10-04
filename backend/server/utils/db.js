const mongoose = require("mongoose");
const { DB_URL, DB_OPTIONS } = require("./helper");

exports.setUp = async () => {
  try {
    await mongoose.connect(
      `${DB_URL}/pollit?retryWrites=true&w=majority`,
      DB_OPTIONS
    );
    console.log("Database running");
  } catch (e) {
    console.log("Error", e);
  }
};
