const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  Username: {type : String},
  // Add more fields as needed
});

const UserModel = mongoose.model("users", usersSchema);
module.exports = UserModel;
