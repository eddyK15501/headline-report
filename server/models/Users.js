const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const newsSchema = require("./News");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    bookmarkedNews: [newsSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.virtual("newsCount").get(function () {
  return this.bookmarkedNews.length;
});
const User = mongoose.model("User", userSchema);
module.exports = User;
