const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/", (req, res) => {
  res.send("Main page");
});

router.get("/question/all", async (req, res) => {
  const data = await Question.find();
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send(data);
});

router.get("/question/add", async(req,res) => {
    const question = new Question({
        title : "Question One",
        body : "How does JS store dates in objects of Date type ?",
        answers : [
            {answer : "The number of miliseconds since January 1st, 1990" , correctAnswer : true},
            {answer : "The number of days since January 1st, 1990"  , correctAnswer : false},
            {answer : "The number of seconds since January 1st, 1990"  , correctAnswer : false}
        ]
    })
    await question.save();
    res.send('question successfully saved')
})

router.get("/question/all/delete", async(req,res) => {
    await Question.find().deleteMany();
    res.status(200).send('Data deleted')
})




module.exports = router;
