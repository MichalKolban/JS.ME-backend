const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  answers: [
    {
      answer: {
        type: String,
        required: true,
      },
      correctAnswer: {
        type: Boolean,
        required: true,
      },
    },
    {
      answer: {
        type: String,
        required: true,
      },
      correctAnswer: {
        type: Boolean,
        required: true,
      },
    },
    {
      answer: {
        type: String,
        required: true,
      },
      correctAnswer: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;