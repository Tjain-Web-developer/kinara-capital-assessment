const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
  Name: String,
  totalMarks: {
    type: Number,
    min: [0, "cannot be negative"],
    max: [500, "marks cannot exceed 500"],
  },
  gender: String,
  branch: String,
  course: String,
  rollNumber: { type: Number, unique: true },
  section: String,
});

module.exports = mongoose.model("studentModel", studentModel);
