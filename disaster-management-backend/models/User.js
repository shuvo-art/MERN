const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "volunteer"] },
  assignedTask: { type: String, default: "Not Assigned" },
});

module.exports = mongoose.model("User", UserSchema);
